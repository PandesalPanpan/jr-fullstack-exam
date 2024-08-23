import { useState } from 'react';
import axios from 'axios';
import config from '../config';

function useUpdateItem() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateItem = async (item) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.put(`${config.apiBaseUrl}items/update-items/${item.id}`, item);
      setLoading(false);
      return response.data;
    } catch (err) {
      setLoading(false);
      setError(err);
      throw err;
    }
  };

  return { updateItem, loading, error };
};

export default useUpdateItem;