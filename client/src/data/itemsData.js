import { useState, useEffect } from 'react';
import shoes from '../assets/images/shoes.png';

export const items = [
  {
    name: 'Nike Air Max',
    description:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.Dignissimos, nemo.',
    price: '100',
    img: shoes,
    inStock: 30,
    id: 1,
  },
  {
    name: 'Nike Air Max',
    description:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.Dignissimos, nemo.',
    price: '200',
    img: shoes,
    inStock: 30,
    id: 2,
  },
  {
    name: 'Nike Air Max',
    description:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.Dignissimos, nemo.',
    price: '300',
    img: shoes,
    inStock: 60,
    id: 3,
  },
  {
    name: 'Nike Air Max',
    description:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.Dignissimos, nemo.',
    price: '400',
    img: shoes,
    inStock: 30,
    id: 4,
  },
  {
    name: 'Nike Air Max',
    description:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.Dignissimos, nemo.',
    price: '500',
    img: shoes,
    inStock: 30,
    id: 5,
  },
  {
    name: 'Nike Air Max',
    description:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.Dignissimos, nemo.',
    price: '600',
    img: shoes,
    inStock: 30,
    id: 6,
  },
  {
    name: 'Nike Air Max',
    description:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.Dignissimos, nemo.',
    price: '700',
    img: shoes,
    inStock: 30,
    id: 7,
  },
  {
    name: 'Nike Air Max',
    description:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.Dignissimos, nemo.',
    price: '800',
    img: shoes,
    inStock: 30,
    id: 8,
  },
  {
    name: 'Nike Air Max',
    description:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.Dignissimos, nemo.',
    price: '900',
    img: shoes,
    inStock: 30,
    id: 9,
  },
  {
    name: 'Nike Air Max',
    description:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.Dignissimos, nemo.',
    price: '1000',
    img: shoes,
    inStock: 30,
    id: 10,
  },
];

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
