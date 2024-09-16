import React, { useContext } from 'react';
import Card from './Card';
import { UserContext } from './Context'; // Ensure the path to your context is correct

function Cards({ products }) {
  const { data } = useContext(UserContext); // Destructure `data` from context

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map(item => (
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
  );
}

export default Cards;
