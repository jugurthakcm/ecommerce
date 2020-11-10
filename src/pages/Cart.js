import React from 'react';
import Navbar from '../components/Navbar';
import './Cart.css';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { useCartContext } from '../data/CartProvider';

const Cart = () => {
  const items = useCartContext()[0];
  const cart = items.length ? (
    <>
      {items.map((item) => (
        <div className="cart__item">
          <div className="cart__itemLeft">
            <img src={item.img} alt={item.name} />
          </div>
          <div className="cart__itemRight">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <h3>
              <sup>$</sup>
              {item.price}
            </h3>
            <p className="cart__itemRightQty">
              <Typography component="p">Quantity</Typography>
              <TextField
                id="standard-number"
                type="number"
                value={item.quantity}
              />
            </p>
          </div>
        </div>
      ))}
    </>
  ) : (
    <p>Your cart is empty</p>
  );
  return (
    <div>
      <Navbar />
      <div className="cart__itemsList">{cart}</div>
    </div>
  );
};

export default Cart;
