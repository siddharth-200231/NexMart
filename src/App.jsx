import React, { useContext, useState } from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaBox, FaInfoCircle, FaUserPlus, FaHome } from 'react-icons/fa';

import About from './About';
import Signup from './Signup';
import Home from './Home';
import { UserContext } from './Context';
import Cards from './Cards';
import Login from './Login';

function App() {
  const { data } = useContext(UserContext);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  // Extract unique categories including 'All'
  const categories = Array.isArray(data)
    ? ['All', ...new Set(data.map(item => item.category))]
    : [];

  // Filter products based on the selected category
  const filteredProducts = selectedCategory === 'All'
    ? data
    : data.filter(item => item.category === selectedCategory);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="w-full bg-white shadow-md p-4 fixed top-0 left-0 z-50 flex justify-between items-center">
        <div className="flex items-center">
          <button className="text-gray-800 md:hidden focus:outline-none" onClick={toggleSidebar}>
            {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          <Link to="/" className="text-2xl font-bold text-gray-800 ml-4">
            MyStore
          </Link>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className={`text-gray-700 hover:text-purple-600 transition-colors ${location.pathname === '/' && 'text-purple-600'}`}>
            Home
          </Link>
          <Link to="/products" className={`text-gray-700 hover:text-purple-600 transition-colors ${location.pathname === '/products' && 'text-purple-600'}`}>
            Products
          </Link>
          <Link to="/about" className={`text-gray-700 hover:text-purple-600 transition-colors ${location.pathname === '/about' && 'text-purple-600'}`}>
            About
          </Link>
        </nav>
        <Link to="/signup" className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
          Sign Up
        </Link>
      </header>

      {/* Sidebar for mobile */}
      <aside className={`fixed inset-y-0 left-0 bg-white shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform md:hidden w-64 z-40`}>
        <div className="flex flex-col p-4 space-y-4">
          <Link to="/" className={`text-gray-700 hover:text-purple-600 transition-colors ${location.pathname === '/' && 'text-purple-600'}`} onClick={toggleSidebar}>
            Home
          </Link>
          <Link to="/products" className={`text-gray-700 hover:text-purple-600 transition-colors ${location.pathname === '/products' && 'text-purple-600'}`} onClick={toggleSidebar}>
            Products
          </Link>
          <Link to="/about" className={`text-gray-700 hover:text-purple-600 transition-colors ${location.pathname === '/about' && 'text-purple-600'}`} onClick={toggleSidebar}>
            About
          </Link>
        </div>
      </aside>

      {/* Main content area */}
      <main className="flex-1 container mx-auto mt-20 p-4 md:pl-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Cards products={filteredProducts} />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-white py-8 mt-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">MyStore</h2>
            <p className="text-gray-400">
              The best products at the best prices, delivered to your door.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-purple-600">Home</Link></li>
              <li><Link to="/products" className="hover:text-purple-600">Products</Link></li>
              <li><Link to="/about" className="hover:text-purple-600">About</Link></li>
              <li><Link to="/signup" className="hover:text-purple-600">Sign Up</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <Link to="#" className="hover:text-purple-600"><FaFacebookF /></Link>
              <Link to="#" className="hover:text-purple-600"><FaTwitter /></Link>
              <Link to="#" className="hover:text-purple-600"><FaInstagram /></Link>
              <Link to="#" className="hover:text-purple-600"><FaLinkedin /></Link>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8">
          &copy; 2024 MyStore. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
