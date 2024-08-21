import React from 'react';

const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
          <p>ID: {item.id}</p>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;