import React from 'react';
import './App.css';
import Item from './components/Item';
import Navbar from './components/Navbar';
import shoes from './assets/images/shoes.png';

function App() {
  const Items = [
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
      inStock: 30,
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
  ];

  return (
    <div className="app">
      <Navbar />
      <div className="app__items">
        {Items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
