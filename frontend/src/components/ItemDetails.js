import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import useUpdateItem from "../hooks/useUpdateItem";
import useDeleteItem from '../hooks/useDeleteItem';

function ItemDetails ({ item }) {
  const [formData, setFormData] = useState({
    name: item.name,
    description: item.description,
    price: item.price,
    id: item.id,
  });

  const { updateItem, loading, error } = useUpdateItem();
  const { deleteItem, loading: deleteLoading, error: deleteError } = useDeleteItem();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    try {
      const updatedItem = await updateItem(formData);
      console.log("Item updated successfully:", updatedItem);
    } catch (err) {
      console.error("Error updating item:", err);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await deleteItem(formData.id);
      console.log("Item deleted successfully:", response);
      navigate('/');
    } catch (err) {
      console.error("Error deleting item:", err);
    }
  };

  return (
    <div>
      <h1>Item Details</h1>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="id">ID:</label>
          <input type="text" id="id" name="id" value={formData.id} readOnly />
        </div>
        <button type="button" onClick={handleUpdate} disabled={loading}>
          {loading ? "Updating..." : "Update"}
        </button>
        {error && <div>Error updating item: {error.message}</div>}
        <button type="button" onClick={handleDelete} disabled={deleteLoading}>
          {deleteLoading ? 'Deleting...' : 'Delete'}
        </button>
        {deleteError && <div>Error deleting item: {deleteError.message}</div>}
      </form>
    </div>
  );
};

export default ItemDetails;
