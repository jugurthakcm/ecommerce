import React, { useState, useRef } from 'react';
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useCartContext } from '../data/CartProvider';
import SearchIcon from '@material-ui/icons/Search';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../data/actions/userActions';

const Navbar = () => {
  const dispatch = useDispatch();

  //Getting the items from the api
  const items = useCartContext()[0];

  //Showing SearchBar on response
  const searchBar = useRef();
  const handleShowSearchBar = () => {
    if (window.innerWidth <= 610) {
      searchBar.current.classList.toggle('showSearchBar');
    }
  };

  //Getting the user state
  const { user } = useSelector((state) => state.user);

  //Showing the component on click on account icon
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    if (user) setAnchorEl(event.currentTarget);
    else {
      document.querySelector('.auth').classList.remove('d-none');
      document.querySelector('.auth').classList.add('d-block');
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  //Logout
  const handleLogout = () => {
    dispatch(logout());
    setAnchorEl(null);
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
            <AccountCircleOutlinedIcon fontSize="large" onClick={handleClick} />
            {user && (
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                className="navbar__popover"
              >
                <span>{`${user.firstName} ${user.lastName}`}</span>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </Popover>
            )}
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
