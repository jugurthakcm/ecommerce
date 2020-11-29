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
            <Link to="/login" className="navbar__authIcon">
              <PersonOutlineOutlinedIcon fontSize="large" />
            </Link>
          </span>
          <Link to="/cart" className="navbar__ShoppingIcon">
            <Badge badgeContent={items.length} color="secondary">
              <ShoppingCartOutlinedIcon
                variant="contained"
                className="navbar__ShoppingIcon"
              />
            </Badge>
          </Link>
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
