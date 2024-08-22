import React, { useState } from "react";
import useUpdateItem from "../hooks/useUpdateItem";
import GoBackButton from "./GoBackButton";
import { validatePrice } from "../utils/validation";

function ItemEdit({ item }) {
  const [formData, setFormData] = useState({
    name: item.name,
    description: item.description,
    price: item.price,
    id: item.id,
  });

  const { updateItem, loading, error } = useUpdateItem();
  const [validationError, setValidationError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const handleUpdate = async (e) => {
    e.preventDefault();

    const { price } = formData;
    if (!validatePrice(price)) {
      setValidationError("Price should only have up to two decimal places.");
      return;
    }

    setValidationError("");

    try {
      const updatedItem = await updateItem(formData);
      setSuccessMessage("Item updated successfully");
      console.log("Item updated successfully:", updatedItem);
    } catch (err) {
      setSuccessMessage("");
    }
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
        {validationError && <p style={{ color: "red" }}>{validationError}</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Saving..." : "Save Changes"}
        </button>
        <GoBackButton />
      </form>
    </div>
  );
}

export default ItemEdit;
