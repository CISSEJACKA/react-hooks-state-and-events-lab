// src/components/ShoppingList.js

import React, { useState } from 'react';
import Item from './Item';

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredItems = items.filter(item =>
    selectedCategory === 'All' || item.category === selectedCategory
  );

  return (
    <div>
      <select onChange={handleCategoryChange}>
        <option value="All">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Vegetables">Vegetables</option>
        <option value="Dairy">Dairy</option>
        {/* Add more categories as needed */}
      </select>
      <ul className="Items">
        {filteredItems.map(item => (
          <Item key={item.id} name={item.name} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;


