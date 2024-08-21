import { useState } from 'react';
import axios from 'axios';
import config from '../config';

const useDeleteItem = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteItem = async (itemId) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.delete(`${config.apiBaseUrl}delete-items/${itemId}`);
      setLoading(false);
      return response.data;
    } catch (err) {
      setLoading(false);
      setError(err);
      throw err;
    }
  };

  return { deleteItem, loading, error };
};

export default useDeleteItem;