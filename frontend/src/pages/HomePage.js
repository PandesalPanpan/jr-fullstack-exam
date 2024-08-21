import React from 'react';
import useFetchItems from '../hooks/useFetchItems';
import ItemList from '../components/ItemList';

function HomePage() {
  const { items, error } = useFetchItems("items/");

  if (error) {
    return <div>Error fetching items: {error.message}</div>;
  }

  return (
    <div>
      <h1>Items</h1>
      <ItemList items={items} />
    </div>
  );
};

export default HomePage;