import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCreateItem from '../hooks/useCreateItem';
import GoBackButton from './GoBackButton';
import { validatePrice } from '../utils/validation';

function ItemCreate() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
  });

  const { createItem, loading, error } = useCreateItem();
  const [validationError, setValidationError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { price } = formData;
    if (!validatePrice(price)) {
      setValidationError("Price should only have up to two decimal places.");
      return;
    }

    setValidationError("");


    try {
      await createItem(formData);
      navigate('/');
    } catch (err) {
      console.error('Failed to create item:', err);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Create New Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        {error && <div className="alert alert-danger">Error: {error.message}</div>}
        {validationError && <p style={{ color: "red" }}>{validationError}</p>}
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Creating...' : 'Create Item'}
        </button>
        <GoBackButton />
      </form>
    </div>
  );
}

export default ItemCreate;