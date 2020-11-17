import React from 'react';
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useCartContext } from '../data/CartProvider';
import SearchIcon from '@material-ui/icons/Search';

const Navbar = () => {
  const items = useCartContext()[0];
  const handleCartOpen = () => {
    const cart = document.getElementsByClassName('cart')[0];
    cart.classList.remove('cart__closed');
    cart.classList.add('cart__open');
  };
  return (
    <nav className="navbar">
      <h1>
        <Link to="/">Ecommerce</Link>
      </h1>
      <div className="navbar__right">
        <span className="navbar__rightSearch">
          <SearchIcon />
          <input placeholder="Search ..." />
        </span>
        <span className="navbar__rightAccount">
          <PersonOutlineOutlinedIcon fontSize="large" />
        </span>
        <Badge badgeContent={items.length} color="secondary">
          <ShoppingCartOutlinedIcon
            className="navbar__ShoppingIcon"
            variant="contained"
            onClick={handleCartOpen}
          />
        </Badge>
      </div>
    </nav>
  );
};

export default Navbar;
