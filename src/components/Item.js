import React, { useState, useRef } from 'react';
import { useCartContext } from '../data/CartProvider';
import { cartActions } from '../data/cartReducer';
import { Link } from 'react-router-dom';
import './Item.css';

function Item({ item }) {
  const dispatch = useCartContext()[1];
  const [itemQuantity, setItemQuantity] = useState(0);
  const addItem = useRef();

  const handleClick = () => {
    const itemSelected = {
      name: item.name,
      quantity: itemQuantity,
      price: item.price,
      img: item.img,
      description: item.description,
      id: item.id,
    };
    dispatch({
      item: itemSelected,
      type: cartActions.ADD_ITEM,
    });
  };

  const handleChange = (e) => {
    if (e.target.value > 0) {
      addItem.current.classList.remove('Mui-disabled');
      setItemQuantity(e.target.value);
    } else {
      addItem.current.classList.add('Mui-disabled');
      setItemQuantity(0);
    }
  };

  return (
    <div className="item">
      <div className="item__img">
        <Link to={`/${item.id}`}>
          <img src={item.img} alt={item.name} width="200px" />
        </Link>
      </div>
      <div className="item__name">
        <Link to={`/${item.id}`}>{item.name}</Link>
      </div>
      <div className="item__buy">
        <p className="item__price">$ {item.price}</p>
        <button className="item__buyBtn">Add to Cart</button>
      </div>
    </div>
  );
}

export default Item;
