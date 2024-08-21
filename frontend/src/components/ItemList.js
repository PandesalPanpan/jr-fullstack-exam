import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <h2><Link to={`/items/${item.id}`}>{item.name}</Link></h2>
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
          <p>ID: {item.id}</p>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;