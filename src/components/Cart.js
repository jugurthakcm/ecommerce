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
import Alert from '@material-ui/lab/Alert';
import CartItem from './CartItem';

const Cart = () => {
  const items = useCartContext()[0];
  const closeCart = useRef();
  const total = items
    .map((item) => item.price * item.quantity)
    .reduce((sum, i) => sum + i, 0);

  const handleCloseCart = () => {
    closeCart.current.classList.add('cart__closed');
    closeCart.current.classList.remove('cart__opened');
  };

  const cart = items.length ? (
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell align="left">Product</TableCell>
            <TableCell align="left">Quantity</TableCell>
            <TableCell align="left">Price ($)</TableCell>
            <TableCell align="left">Total ($)</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (
    <Alert variant="outlined" severity="info">
      Your cart is empty.
    </Alert>
  );
  const disableBtn = items.length ? false : true;
  return (
    <div className="cart cart__closed" ref={closeCart}>
      <div className="cart__header">
        <h2>Shopping Cart</h2>
        <p className="cart__actionsClose" onClick={handleCloseCart}>
          [X] Close
        </p>
      </div>
      {cart}
      <div className="cart__actions">
        <button className="cart__actionsCheckout" disabled={disableBtn}>
          Checkout ($ {total})
        </button>
      </div>
    </div>
  );
};

export default Cart;
