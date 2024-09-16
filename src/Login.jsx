import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);
  const [flashMessage, setFlashMessage] = useState(''); // State for flash message

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setFlashMessage(''); // Clear flash message before submitting

    try {
      // Send the form data to the /login endpoint using Axios
      const response = await axios.post('http://localhost:5000/login', {
        email: formData.email,
        password: formData.password,
      });

      if (response.status === 200) {
        setFlashMessage('Login successful!');
        // Optionally, you can redirect the user or save the token to localStorage
      } else {
        setFlashMessage('Error logging in. Please check your credentials.');
      }
    } catch (error) {
      setFlashMessage('Error: ' + (error.response?.data?.message || error.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

      {/* Flash Message */}
      {flashMessage && (
        <div className="mb-6 text-center text-white bg-green-500 p-3 rounded">
          {flashMessage}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          disabled={loading}
        >
          {loading ? 'Logging In...' : 'Login'}
        </button>
      </form>

      {/* Not a User? Sign Up Link */}
      <div className="mt-6 text-center">
        <p className="text-gray-700">
          Not a user?{' '}
          <Link to="/signup" className="text-purple-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
