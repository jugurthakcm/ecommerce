import React from 'react';
import CartItemPage from '../components/CartItemPage';
import { useCartContext } from '../data/CartProvider';
import { Link } from 'react-router-dom';
import './Cart.css';

const CartPage = () => {
  const items = useCartContext()[0];
  console.log(items);
  return (
    <div className="cartPage">
      <div className="cartPage__header">
        <Link to="/">Your Shopping Cart</Link>
      </div>
      <div className="cartPage__content">
        <div className="cartPage__contentItems">
          {items !== [] ? (
            items.map((item) => <CartItemPage item={item} />)
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>
        <div className="cartPage__contentCheckout">
          <div className="cartPage__contentCheckoutTotal">
            <h3>Subtotal : </h3>
            <p>$ 1200</p>
          </div>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
