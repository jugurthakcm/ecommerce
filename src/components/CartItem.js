import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import { useCartContext } from '../data/CartProvider';
import { cartActions } from '../data/cartReducer';

const CartItem = ({ item }) => {
  const dispatch = useCartContext()[1];
  const handleDeleteItem = () => {
    dispatch({ type: cartActions.DELETE_ITEM, deletedItem: item.id });
  };
  return (
    <TableRow key={item.id}>
      <TableCell component="th" scope="row">
        <img src={item.img} alt={item.name} width="70px" />
      </TableCell>
      <TableCell align="left">{item.name}</TableCell>
      <TableCell align="left">{item.quantity}</TableCell>
      <TableCell align="left">{item.price}</TableCell>
      <TableCell align="left">{item.price * item.quantity}</TableCell>
      <TableCell padding="checkbox">
        <DeleteIcon className="cart__deleteIcon" onClick={handleDeleteItem} />
      </TableCell>
    </TableRow>
  );
};

export default CartItem;
