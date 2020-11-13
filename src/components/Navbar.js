import React from 'react';
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const handleCartOpen = () => {
    const cart = document.getElementsByClassName('cart')[0];
    cart.classList.remove('cart__closed');
    cart.classList.add('cart__open');
  };
  return (
    <nav className="app__navbar">
      <h1>
        <Link to="/">Ecommerce</Link>
      </h1>

      <Badge badgeContent={2} color="secondary">
        <ShoppingCartOutlinedIcon
          className="app__navbarShoppingIcon"
          variant="contained"
          onClick={handleCartOpen}
        />
      </Badge>
    </nav>
  );
};

export default Navbar;
