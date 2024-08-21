import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCreateItem from '../hooks/useCreateItem';

function ItemCreate() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
  });

  const { createItem, loading, error } = useCreateItem();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCreate = async () => {
    try {
      const newItem = await createItem(formData);
      console.log("Item created successfully:", newItem);
      navigate('/'); // Redirect to home page
    } catch (err) {
      console.error("Error creating item:", err);
    }
  };

  return (
    <div>
      <h1>Create Item</h1>
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
        <button type="button" onClick={handleCreate} disabled={loading}>
          {loading ? 'Creating...' : 'Create'}
        </button>
        {error && <div>Error creating item: {error.message}</div>}
      </form>
    </div>
  );
};

export default ItemCreate;