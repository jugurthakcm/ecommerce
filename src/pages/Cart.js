import React from 'react';
import CartItem from '../components/CartItem';
import { useCartContext } from '../data/CartProvider';
import { Link } from 'react-router-dom';
import './Cart.css';
import { formatPrice } from '../util';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';

const Cart = () => {
  const items = useCartContext()[0];
  console.log(items);
  const total = items
    .map((item) => item.price * item.quantity)
    .reduce((sum, i) => sum + i, 0);
  return (
    <div className="cart">
      <div className="cart__header">
        <h2>Your Shopping Cart</h2>
        <Link to="/">
          <span>
            <ArrowBackRoundedIcon /> <span>Go back home</span>
          </span>
        </Link>
      </div>
      <div className="cart__content">
        <div className="cart__contentItems">
          {items.length ? (
            items.map((item) => <CartItem item={item} />)
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
