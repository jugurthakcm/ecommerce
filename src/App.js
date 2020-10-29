import React from 'react';
import './App.css';
import Item from './components/Item';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Popover from '@material-ui/core/Popover';
import Cart from './components/Cart';

function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

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
        <Badge badgeContent={3} color="primary">
          <ShoppingCartIcon
            className="app__navbarShoppingIcon"
            aria-describedby={id}
            variant="contained"
            onClick={handleClick}
          />
        </Badge>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Cart />
        </Popover>
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
