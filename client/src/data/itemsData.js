import { useState, useEffect } from 'react';

export const ItemsData = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const getItemsData = async () => {
      await fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((json) => setData(json));
    };
    getItemsData();
  }, []);
  return data;
};
