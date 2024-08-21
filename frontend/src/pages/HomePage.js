import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFetchItems from '../hooks/useFetchItems';
import ItemList from '../components/ItemList';

function HomePage() {
  const { items, error } = useFetchItems("items/");
  const navigate = useNavigate();

  if (error) {
    return <div>Error fetching items: {error.message}</div>;
  }

  const handleNavigateToCreate = () => {
    navigate('/create-item');
  };

  return (
    <div>
      <h1>Items</h1>
      <button onClick={handleNavigateToCreate}>Create New Item</button>
      <ItemList items={items} />
    </div>
  );
};

export default HomePage;