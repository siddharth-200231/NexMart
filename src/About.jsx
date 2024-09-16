import React from 'react';

function About() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold text-center mb-6">About Our Product Listing Platform</h1>
      <p className="text-gray-700 leading-relaxed mb-4">
        Welcome to our product listing platform! This site is designed to help users easily browse and filter through a wide variety of products.
        With a seamless interface, you can explore items based on their categories and view specific details for each product.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Our platform allows for quick product additions and is fully dynamic, making it perfect for both users looking for specific items 
        and administrators wanting to expand the product list effortlessly. The category-based filtering enhances the shopping experience, 
        allowing users to narrow down their searches quickly.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Key Features</h2>
      <ul className="list-disc pl-6 text-gray-700 mb-6">
        <li>Browse products by categories</li>
        <li>Filter products to find exactly what you're looking for</li>
        <li>Easily add new products to the inventory</li>
        <li>Responsive design for seamless use on any device</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Technologies Behind the Platform</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This platform is built using modern technologies to ensure fast, reliable, and responsive user experiences:
      </p>
      <ul className="list-disc pl-6 text-gray-700">
        <li><span className="font-semibold text-blue-600">React</span> for creating an interactive and dynamic user interface</li>
        <li><span className="font-semibold text-blue-600">React Router</span> for navigation between different pages</li>
        <li><span className="font-semibold text-blue-600">Tailwind CSS</span> for responsive and attractive styling</li>
        <li><span className="font-semibold text-blue-600">Express.js</span> for handling backend operations and managing APIs</li>
        <li><span className="font-semibold text-blue-600">MongoDB</span> for securely storing and retrieving product and payment details</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mt-6">
        Our platform is constantly evolving, and we aim to add more features in the future, ensuring the best shopping experience for our users. 
        Whether you're here to find the perfect product or to manage inventory, we’ve got you covered!
      </p>
    </div>
  );
}

export default About;
