import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import useUpdateItem from "../hooks/useUpdateItem";


function ItemEdit({ item }) {
  const [formData, setFormData] = useState({
    name: item.name,
    description: item.description,
    price: item.price,
    id: item.id,
  });

  const navigate = useNavigate();
  const { updateItem, loading, error } = useUpdateItem();

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

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <h2>Item Details</h2>
      <form onSubmit={handleUpdate}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            className="form-control"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            className="form-control"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        {error && (
          <div className="alert alert-danger">Error: {error.message}</div>
        )}
        <button
          type="submit"
          className="btn btn-primary"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
        <button type="button" className="btn btn-secondary ml-2" onClick={handleGoBack}>
          Go back
        </button>
      </form>
    </div>
  );
}

export default ItemEdit;
