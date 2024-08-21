import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFetchItems from '../hooks/useFetchItems';
import useDeleteItem from '../hooks/useDeleteItem';
import ItemTable from '../components/ItemTable';

function HomePage() {
  const { items, error, refetch } = useFetchItems("items/");
  const { deleteItem, loading, error: deleteError } = useDeleteItem();
  const navigate = useNavigate();

  if (error) {
    return <div>Error fetching items: {error.message}</div>;
  }

  function handleNavigateToCreate() {
    navigate('/create-item');
  };

  async function handleDelete(itemId) {
    try {
      await deleteItem(itemId);
      refetch();
    } catch (err) {
      console.error('Failed to delete item:', err);
    }
  };

  return (
    <div>
      <h1>Items</h1>
      <button onClick={handleNavigateToCreate}>Create New Item</button>
      {loading && <div>Loading...</div>} {}
      <ItemTable items={items} onDelete={handleDelete} />
      {deleteError && <div>Error deleting item: {deleteError.message}</div>}
    </div>
  );
};

export default HomePage;