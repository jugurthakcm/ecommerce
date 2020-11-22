import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../data/CartProvider';
import { cartActions } from '../data/cartReducer';
import { formatPrice } from '../util';
import './Item.css';

function Item({ item }) {
  const dispatch = useCartContext()[1];
  const inStock = 40;

  const handleClick = () => {
    const itemSelected = {
      title: item.title,
      quantity: 1,
      price: item.price,
      image: item.image,
      description: item.description,
      inStock: inStock,
      id: item.id,
      category: item.category,
    };
    dispatch({
      item: itemSelected,
      type: cartActions.ADD_ITEM,
    });
  };

  const categoryLink = item.category.split(' ').join('_');

  return (
    <div className="item">
      <div className="item__img">
        <Link to={`${categoryLink}/${item.id}`}>
          <img src={item.image} alt={item.title} />
        </Link>
      </div>

      <div className="item__title">
        <Link to={`/${categoryLink}/${item.id}`}>{item.title}</Link>
      </div>
      <div className="item__buy">
        <p className="item__price">$ {formatPrice(item.price)}</p>
        <button className="item__buyBtn" onClick={handleClick}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Item;
