import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
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

  let arrayQty = [];
  for (let i = 1; i <= item.inStock; i++) {
    arrayQty.push(i);
  }

  const handleChangeQty = (e) => {
    const quantity = e.target.value;
    dispatch({ type: cartActions.CHANGE_QTY, item: { quantity, id: item.id } });
  };

  const categoryLink = item.category.split(' ').join('_');

  return (
    <TableRow key={item.id} className="cart__item">
      <TableCell component="th" scope="row">
        <Link className="cart__itemImg">
          <img src={item.image} alt={item.title} height="70px" />
        </Link>
      </TableCell>
      <TableCell align="left" className="cart__itemTitle">
        <Link to={`/${categoryLink}/${item.id}`}>{item.title}</Link>
      </TableCell>
      <TableCell align="left">
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
      </TableCell>
      <TableCell align="left">{item.price.toFixed(2)}</TableCell>
      <TableCell align="left">{item.price * item.quantity}</TableCell>
      <TableCell padding="checkbox">
        <DeleteIcon className="cart__deleteIcon" onClick={handleDeleteItem} />
      </TableCell>
    </TableRow>
  );
};

export default CartItem;
