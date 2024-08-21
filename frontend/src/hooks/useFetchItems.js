import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';

const useFetchItems = (endpoint) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(config.apiBaseUrl + endpoint);
        console.log('API response:', response.data);
        const itemsArray = Array.isArray(response.data)
          ? response.data
          : Object.entries(response.data).map(([id, item]) => ({ id, ...item }));
        setItems(itemsArray);
        console.log('Processed items array:', itemsArray);
      } catch (error) {
        console.error("Error fetching items:", error);
        setError(error);
      }
    };

    fetchItems();
  }, [endpoint]);

  return { items, error };
};

export default useFetchItems;