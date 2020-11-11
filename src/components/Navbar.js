import React from 'react';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <h1>
        <Link to="/">Ecommerce</Link>
      </h1>
      <MenuIcon />
      <Badge badgeContent={0} color="primary">
        <Link to="/cart" className="app__navbarCartLink">
          <ShoppingCartIcon
            className="app__navbarShoppingIcon"
            variant="contained"
          />
        </Link>
      </Badge>
    </nav>
  );
};

export default Navbar;
