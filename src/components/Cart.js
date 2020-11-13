import React, { useRef } from 'react';

import './Cart.css';

import { useCartContext } from '../data/CartProvider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Alert from '@material-ui/lab/Alert';
import { Popover } from '@material-ui/core';

const Cart = () => {
  const items = useCartContext()[0];
  const closeCart = useRef();

  const handleCloseCart = () => {
    closeCart.current.classList.add('cart__closed');
    closeCart.current.classList.remove('cart__opened');
  };

  const cart = items.length ? (
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Image</TableCell>
            <TableCell align="left">Product</TableCell>
            <TableCell align="left">Quantity</TableCell>
            <TableCell align="left">Price ($)</TableCell>
            <TableCell align="left">Total ($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.name}>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell component="th" scope="row">
                <img src={item.img} alt={item.name} width="70px" />
              </TableCell>
              <TableCell align="left">{item.name}</TableCell>
              <TableCell align="left">{item.quantity}</TableCell>
              <TableCell align="left">{item.price}</TableCell>
              <TableCell align="left">1200</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (
    <Alert variant="outlined" severity="info">
      Your cart is empty.
    </Alert>
  );
  return (
    <div className="cart cart__closed" id="simple-popover" ref={closeCart}>
      <div className="cart__header">
        <h2>Shopping Cart</h2>
        <p className="cart__actionsClose" onClick={handleCloseCart}>
          [X] Close
        </p>
      </div>
      {cart}
      <div className="cart__actions">
        <button className="cart__actionsDelete">Delete</button>
        <button className="cart__actionsCheckout">Checkout ($ 4000)</button>
      </div>
    </div>
  );
};

export default Cart;
