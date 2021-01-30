import React from 'react';
import CartItem from '../components/CartItem';
import './Cart.css';
import { formatPrice } from '../util';
import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);

  const total = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((sum, i) => sum + i, 0);
  return (
    <div className="cart">
      <div className="cart__header">
        <Navbar />
      </div>
      <div className="cart__content">
        <div className="cart__contentItems">
          {cartItems.length ? (
            cartItems.map((item) => <CartItem item={item} key={item.id} />)
          ) : (
            <p className="cart__empty">Your cart is empty</p>
          )}
        </div>
        <div className="cart__contentCheckout">
          <div className="cart__contentCheckoutTotal">
            <h3>Subtotal : </h3>
            <p>$ {formatPrice(total)}</p>
          </div>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
