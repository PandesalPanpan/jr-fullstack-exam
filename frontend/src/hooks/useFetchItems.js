import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import config from '../config';

function useFetchItems(endpoint) {
  const [items, setItems] = useState([]); // Ensure initial state is an empty array
  const [error, setError] = useState(null);
  const [fetchTrigger, setFetchTrigger] = useState(0);

  const fetchItems = useCallback(async () => {
    try {
      const response = await axios.get(`${config.apiBaseUrl}${endpoint}`);
      console.log('API Response:', response.data);
      const itemsArray = Array.isArray(response.data)
        ? response.data
        : Object.entries(response.data).map(([id, item]) => ({ id, ...item }));

      setItems(itemsArray);
    } catch (error) {
      console.error("Error fetching items:", error);
      setError(error);
    }
  }, [endpoint]);

  useEffect(() => {
    fetchItems();
  }, [fetchTrigger, fetchItems]);

  const refetch = () => setFetchTrigger(prev => prev + 1);

  return { items, error, refetch };
};

export default useFetchItems;