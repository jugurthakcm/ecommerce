import React from 'react';
import './CartItem.css';
import { formatPrice } from '../util';
import { useCartContext } from '../data/CartProvider';
import { cartActions } from '../data/cartReducer';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Link } from 'react-router-dom';

const CartItem = ({ item }) => {
  const dispatch = useCartContext()[1];

  const handleDeleteItem = () => {
    dispatch({ type: cartActions.DELETE_ITEM, deletedItem: item.id });
  };

  const handleChangeQty = (e) => {
    const quantity = e.target.value;
    dispatch({ type: cartActions.CHANGE_QTY, item: { quantity, id: item.id } });
  };

  let arrayQty = [];
  for (let i = 1; i <= item.inStock; i++) {
    arrayQty.push(i);
  }

  const categoryLink = item.category.split(' ').join('_');
  return (
    <div className="cartItem">
      <div className="cartItem__image">
        <Link to={`/${categoryLink}/${item.id}`}>
          <img src={item.image} alt={item.title} />
        </Link>
      </div>
      <div className="cartItem__title">
        <Link to={`/${categoryLink}/${item.id}`}>{item.title}</Link>
      </div>
      <div className="cartItem__quantity">
        <FormControl variant="outlined">
          <Select
            className="cart__itemQtySelector"
            value={item.quantity}
            onChange={handleChangeQty}
          >
            {arrayQty.map((el) => (
              <MenuItem key={el} value={el} className="cart__itemQtyValue">
                {el}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <p>$ {formatPrice(item.price)}</p>
      <span className="cartItem__delete" onClick={handleDeleteItem}>
        &#10005;
      </span>
    </div>
  );
};

export default CartItem;
