import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

function Item({ item }) {
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
