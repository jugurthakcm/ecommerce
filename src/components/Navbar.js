import React, { useRef } from 'react';
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
  const searchBar = useRef();
  const handleShowSearchBar = () => {
    if (window.innerWidth <= 610) {
      searchBar.current.classList.toggle('showSearchBar');
    }
  };
  return (
    <nav className="navbar">
      <div className="navbar__up">
        <h1>
          <Link to="/">Ecommerce</Link>
        </h1>
        <div className="navbar__right">
          <span className="navbar__rightSearch">
            <SearchIcon onClick={handleShowSearchBar} />
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
          <Link to="/cart">Cart</Link>
        </div>
      </div>
      <div className="navbar__responsiveSearch" ref={searchBar}>
        <SearchIcon />
        <input placeholder="Search ..." />
      </div>
    </nav>
  );
};

export default Navbar;
