import React from 'react';
import './App.css';
import Item from './components/Item';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

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
      <nav className="app__navbar">
        <h1>ShoppingCart Notification</h1>
        <Badge badgeContent={4} color="primary">
          <ShoppingCartIcon className="app__navbarShoppingIcon" />
        </Badge>
      </nav>
      <div className="app__items">
        {Items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
