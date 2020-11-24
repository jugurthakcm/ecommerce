import React from 'react';
import './CartItemPage.css';
import { formatPrice } from '../util';

const CartItemPage = ({ item }) => {
  return (
    <div className="cartItem">
      <div className="cartItem__image">
        <img src={item.image} alt={item.title} />
      </div>
      <p>{item.title}</p>
      <div className="cartItem__quantity">
        <input type="number" value={item.quantity} />
        <div className="cartItem__quantityModify">
          <span>
            <p>+</p>
          </span>
          <span>
            <p>-</p>
          </span>
        </div>
      </div>
      <p>$ {formatPrice(item.price)}</p>
      <span className="cartItem__delete">&#10005;</span>
    </div>
  );
};

export default CartItemPage;
