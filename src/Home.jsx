import React from 'react';
import { Link } from 'react-router-dom';
import { FaBox, FaInfoCircle, FaUserPlus, FaStar, FaTruck, FaPhone } from 'react-icons/fa';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section
        className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=600')`
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center text-white p-8 max-w-3xl z-10">
          <h1 className="text-6xl font-extrabold mb-4 animate-pulse">Elevate Your Shopping Experience</h1>
          <p className="text-xl mb-8">
            Discover premium products and exceptional services tailored just for you.
          </p>
          <Link
            to="/signup"
            className="inline-block py-3 px-8 bg-white text-purple-600 text-lg font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 bg-white">
        <h2 className="text-4xl font-semibold mb-12 text-center text-gray-800">What Makes Us Different?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-8 border-2 border-gray-200 rounded-lg hover:border-purple-500 transition-colors duration-300">
            <FaStar className="text-5xl text-purple-500 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Top Quality</h3>
            <p className="text-gray-600">We offer products from trusted brands ensuring unmatched quality.</p>
          </div>
          <div className="p-8 border-2 border-gray-200 rounded-lg hover:border-green-500 transition-colors duration-300">
            <FaTruck className="text-5xl text-green-500 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Enjoy quick and reliable delivery to your doorstep.</p>
          </div>
          <div className="p-8 border-2 border-gray-200 rounded-lg hover:border-blue-500 transition-colors duration-300">
            <FaPhone className="text-5xl text-blue-500 mb-4" />
            <h3 className="text-2xl font-bold mb-2">24/7 Support</h3>
            <p className="text-gray-600">Our support team is available anytime, day or night.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-16 bg-gray-100">
        <h2 className="text-4xl font-semibold mb-10 text-center text-gray-800">Ready to Get Started?</h2>
        <div className="flex justify-center space-x-16 max-w-4xl mx-auto">
          <Link
            to="/products"
            className="flex flex-col items-center text-gray-700 hover:text-purple-600 transition-colors duration-300"
          >
            <FaBox className="text-6xl mb-2" />
            <span className="text-xl font-semibold">Explore Products</span>
          </Link>
          <Link
            to="/about"
            className="flex flex-col items-center text-gray-700 hover:text-purple-600 transition-colors duration-300"
          >
            <FaInfoCircle className="text-6xl mb-2" />
            <span className="text-xl font-semibold">Learn About Us</span>
          </Link>
          <Link
            to="/signup"
            className="flex flex-col items-center text-gray-700 hover:text-purple-600 transition-colors duration-300"
          >
            <FaUserPlus className="text-6xl mb-2" />
            <span className="text-xl font-semibold">Join Our Community</span>
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 bg-white">
        <h2 className="text-4xl font-semibold mb-12 text-center text-gray-800">What Our Customers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <blockquote className="p-8 bg-gray-100 rounded-lg shadow-lg">
            <p className="italic text-lg mb-4">"Fantastic service! The products are top-notch and delivery was quick."</p>
            <cite className="text-lg font-semibold">- Sarah L.</cite>
          </blockquote>
          <blockquote className="p-8 bg-gray-100 rounded-lg shadow-lg">
            <p className="italic text-lg mb-4">"Great variety and competitive prices. I'm definitely coming back!"</p>
            <cite className="text-lg font-semibold">- John D.</cite>
          </blockquote>
          <blockquote className="p-8 bg-gray-100 rounded-lg shadow-lg">
            <p className="italic text-lg mb-4">"Customer support was there when I needed it. Highly recommended!"</p>
            <cite className="text-lg font-semibold">- Emily R.</cite>
          </blockquote>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full py-8 bg-gray-900 text-white text-center">
        <p>&copy; 2024 YourStore. All rights reserved.</p>
        <div className="flex justify-center mt-4 space-x-4">
          <Link to="/privacy" className="hover:text-gray-400 transition-colors duration-300">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-gray-400 transition-colors duration-300">Terms of Service</Link>
          <Link to="/contact" className="hover:text-gray-400 transition-colors duration-300">Contact Us</Link>
        </div>
      </footer>
    </div>
  );
}

export default Home;
