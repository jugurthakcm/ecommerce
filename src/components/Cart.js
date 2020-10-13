import React from 'react';
import './Cart.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

const Cart = () => {
  return (
    <List aria-label="shopping cart" className="cart">
      <ListItem className="cart__item">
        <ListItemText primary="Item 1" />
        <ListItemText primary="100$" edge="end" />
        <ListItemText primary="3" />
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItem>
      <ListItem className="cart__item">
        <ListItemText primary="Item 2" />
        <ListItemText primary="200$" edge="end" />
        <ListItemText primary="3" />
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItem>
      <ListItem className="cart__item">
        <ListItemText primary="Item 2" />
        <ListItemText primary="200$" edge="end" />
        <ListItemText primary="3" />
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItem>
      <div className="cart__buttonContainer">
        <Button variant="contained" color="primary" className="cart__button">
          Checkout ($ 600)
        </Button>
      </div>
    </List>
  );
};

export default Cart;
