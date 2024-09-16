import React, { useContext, useState } from 'react';
import Card from './Card';
import { UserContext } from './Context'; // Ensure the path to your context is correct

function Cards() {
  const { data } = useContext(UserContext); // Destructure `data` from context
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Extract unique categories including 'All'
  const categories = ['All', ...new Set(data.map(item => item.category))];

  // Filter products based on the selected category
  const filteredProducts = selectedCategory === 'All'
    ? data
    : data.filter(item => item.category === selectedCategory);

  return (
    <div className="p-4">
      {/* Category Filter Bar */}
      <div className="mb-4">
        <ul className="flex space-x-4">
          {categories.map(category => (
            <li key={category}>
              <button
                className={`px-4 py-2 rounded ${selectedCategory === category ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-purple-600 hover:text-white`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Products List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(item => (
          <Card
            key={item.id}
            title={item.title}
            price={item.price}
            category={item.category}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Cards;
