import React from 'react';
import './App.css';
import Item from './components/Item';

function App() {
  const Items = [
    {
      name: 'Lorem Ipsum',
      description:
        ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.Dignissimos, nemo.',
      price: '100',
      img: 'https://i8.amplience.net/i/jpl/jd_341585_a?qlt=92&w=600&h=425&v=1',
      id: 1,
    },
    {
      name: 'Lorem Ipsum',
      description:
        ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.Dignissimos, nemo.',
      price: '100',
      img: 'https://i8.amplience.net/i/jpl/jd_341585_a?qlt=92&w=600&h=425&v=1',
      id: 2,
    },
    {
      name: 'Lorem Ipsum',
      description:
        ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.Dignissimos, nemo.',
      price: '100',
      img: 'https://i8.amplience.net/i/jpl/jd_341585_a?qlt=92&w=600&h=425&v=1',
      id: 3,
    },
  ];

  return (
    <div className="app">
      <div className="items">
        {Items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
