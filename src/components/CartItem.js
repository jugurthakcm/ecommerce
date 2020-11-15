import React, { useState, useReducer } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import { useCartContext } from '../data/CartProvider';
import { cartActions, cartReducer, initialCart } from '../data/cartReducer';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const CartItem = ({ item }) => {
  const dispatch = useCartContext()[1];
  // const [quantity, setQuantity] = useState(item.quantity);
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

  return (
    <TableRow key={item.id}>
      <TableCell component="th" scope="row">
        <img src={item.img} alt={item.name} width="70px" />
      </TableCell>
      <TableCell align="left">{item.name}</TableCell>
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
      <TableCell align="left">{item.price}</TableCell>
      <TableCell align="left">{item.price * item.quantity}</TableCell>
      <TableCell padding="checkbox">
        <DeleteIcon className="cart__deleteIcon" onClick={handleDeleteItem} />
      </TableCell>
    </TableRow>
  );
};

export default CartItem;
