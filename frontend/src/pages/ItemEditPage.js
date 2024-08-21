import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchItem from '../hooks/useFetchItem';
import ItemEdit from '../components/ItemEdit';

function ItemEditPage() {
  const { itemId } = useParams();
  const { item, error } = useFetchItem(itemId);

  if (error) {
    return <div>Error fetching item: {error.message}</div>;
  }

  if (!item) {
    return <div>Loading...</div>;
  }

  return <ItemEdit item={item} />;
};

export default ItemEditPage;