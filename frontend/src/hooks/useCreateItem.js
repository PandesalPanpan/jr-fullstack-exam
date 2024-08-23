import { useState } from 'react';
import axios from 'axios';
import config from '../config';

function useCreateItem() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createItem = async (itemData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${config.apiBaseUrl}items/create-item`, itemData);
      setLoading(false);
      return response.data;
    } catch (err) {
      setLoading(false);
      setError(err);
      throw err;
    }
  };

  return { createItem, loading, error };
};

export default useCreateItem;