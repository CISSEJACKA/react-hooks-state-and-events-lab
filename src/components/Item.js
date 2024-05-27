// Item.js

import React, { useState } from 'react';

function Item({ name }) {
  const [inCart, setInCart] = useState(false);

  const handleCartToggle = () => {
    setInCart(!inCart);
  };

  return (
    <li className={inCart ? 'in-cart' : ''}>
      {name}
      <button onClick={handleCartToggle}>
        {inCart ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );
}

export default Item;


