import mongoose from "mongoose";

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/store").then(() => {
    console.log("Connected to MongoDB successfully");
}).catch((e) => {
    console.log("Error connecting to MongoDB:", e.message);
});

// Create User Schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,  // Make name a required field
        trim: true       // Remove extra spaces
    },
    email: {
        type: String,
        required: true,  // Email is required
        unique: true,    // Email should be unique
        trim: true,      // Remove extra spaces
        lowercase: true, // Store email in lowercase
    },
    password: {
        type: String,
        required: true,  // Password is required
    }
}, { timestamps: true });  // Adds createdAt and updatedAt timestamps

// Create the User model from the schema
const User = mongoose.model('User', UserSchema);

export default User;
