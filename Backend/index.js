import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import userModel from './user.js'; // Importing user model

const app = express();
const SECRET_KEY = 'your_secret_key'; // Use a strong secret key

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your frontend URL
  credentials: true // Allow credentials (cookies) to be sent
}));
app.use(express.json());
app.use(cookieParser());

// MongoDB Connection (replace with your MongoDB URI)


// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to our API!' });
});

app.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
    const id = uuidv4(); // Generate a unique ID
    const newUser = new userModel({ id, name, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Issue a JWT
    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
      expiresIn: '1h', // Token expires in 1 hour
    });

    // Set the JWT as a cookie
    res.cookie('token', token, {
      httpOnly: true, // Cookie is accessible only by the web server
      maxAge: 60 * 60 * 1000 // 1 hour expiration
    });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
});

// JWT Authentication Middleware
const authenticateJWT = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(403).json({ message: 'Token is missing' });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    req.user = user;
    next();
  });
};

// Protected Route
app.get('/protected', authenticateJWT, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

// Refresh Token Route (optional)
app.post('/refresh-token', (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(403).json({ message: 'Token is missing' });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    // Issue a new token
    const newToken = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
      expiresIn: '1h',
    });

    // Set the new token as a cookie
    res.cookie('token', newToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 1000, // 1 hour expiration
    });

    res.json({ message: 'Token refreshed', token: newToken });
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
