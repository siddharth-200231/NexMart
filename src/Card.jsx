import React from 'react';
import { FaHeart } from 'react-icons/fa';

function Card({ title, price, category, description, image }) {
  return (
    <div className="relative max-w-xs w-full md:w-80 rounded-lg overflow-hidden shadow-lg m-4 bg-white transform transition-transform duration-300 hover:scale-105 hover:shadow-xl border border-gray-200">
      {/* Image Section */}
      <div className="relative">
        <img className="w-full h-64 object-contain" src={image} alt={title} />
        {/* Discount Label */}
        <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
          Summer Deal
        </div>
        <div className="absolute top-10 left-2 bg-yellow-500 text-black text-xs px-2 py-1 rounded">
          -15%
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 truncate">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 truncate">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-gray-800">${price}</span>
          <FaHeart className="text-gray-500 hover:text-red-500 transition-colors duration-200 cursor-pointer" aria-label="Add to wishlist" />
        </div>
      </div>

      {/* Add to Cart Button */}
      <div className="p-4 border-t border-gray-200">
        <button
          className="w-full bg-gray-800 text-white font-semibold py-2 border border-gray-800 rounded hover:bg-gray-900 transition-colors duration-300"
          aria-label={`Add ${title} to cart`}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Card;
