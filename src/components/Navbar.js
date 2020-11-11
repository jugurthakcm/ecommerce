import React from 'react';
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
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
      <Badge badgeContent={2} color="secondary">
        <Link to="/cart" className="app__navbarCartLink">
          <ShoppingCartOutlinedIcon
            className="app__navbarShoppingIcon"
            variant="contained"
          />
        </Link>
      </Badge>
    </nav>
  );
};

export default Navbar;
