import React from "react";
import useFetchItems from "../hooks/useFetchItems";
import useDeleteItem from "../hooks/useDeleteItem";
import ItemTable from "../components/ItemTable";

function HomePage() {
  const { items, error, refetch } = useFetchItems("items/");
  const { deleteItem, loading, error: deleteError } = useDeleteItem();

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        Error fetching items: {error.message}
      </div>
    );
  }

  async function handleDelete(itemId) {
    try {
      await deleteItem(itemId);
      refetch();
    } catch (err) {
      console.error("Failed to delete item:", err);
    }
  }

  return (
    <div>
      {loading && <div>Loading...</div>} {}
      <ItemTable items={items} onDelete={handleDelete} />
      {deleteError && <div>Error deleting item: {deleteError.message}</div>}
    </div>
  );
}

export default HomePage;
