import React from 'react';
import './App.css';
import Item from './components/Item';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useNotificationContext } from './data/NotificationProvider';

function App() {
  const [{ notification }, dispatch] = useNotificationContext();

  const Items = [
    {
      name: 'Item one',
      description:
        ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.Dignissimos, nemo.',
      price: '100',
      img: 'https://i8.amplience.net/i/jpl/jd_341585_a?qlt=92&w=600&h=425&v=1',
      id: 1,
    },
    {
      name: 'Item two',
      description:
        ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.Dignissimos, nemo.',
      price: '200',
      img: 'https://i8.amplience.net/i/jpl/jd_341585_a?qlt=92&w=600&h=425&v=1',
      id: 2,
    },
    {
      name: 'Item three',
      description:
        ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.Dignissimos, nemo.',
      price: '300',
      img: 'https://i8.amplience.net/i/jpl/jd_341585_a?qlt=92&w=600&h=425&v=1',
      id: 3,
    },
  ];

  return (
    <div className="app">
      <nav className="app__navbar">
        <h1>ShoppingCart</h1>
        <Badge badgeContent={notification} color="primary">
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
