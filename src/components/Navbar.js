import React from 'react';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <h1>
        <Link to="/">ShoppingCart</Link>
      </h1>
      <Badge badgeContent={3} color="primary">
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
