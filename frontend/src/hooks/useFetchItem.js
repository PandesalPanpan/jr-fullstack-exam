import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';

const useFetchItem = (itemId) => {
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`${config.apiBaseUrl}items/${itemId}`);
        setItem(response.data);
        console.log('Fetch Item:', response.data);
      } catch (error) {
        console.error("Error fetching item:", error);
        setError(error);
      }
    };

    fetchItem();
  }, [itemId]);

  return { item, error };
};

export default useFetchItem;