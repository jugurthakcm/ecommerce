import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const CartItem = ({ item }) => {
  return (
    <TableRow key={item.id}>
      <TableCell padding="checkbox">
        <Checkbox />
      </TableCell>
      <TableCell component="th" scope="row">
        <img src={item.img} alt={item.name} width="70px" />
      </TableCell>
      <TableCell align="left">{item.name}</TableCell>
      <TableCell align="left">{item.quantity}</TableCell>
      <TableCell align="left">{item.price}</TableCell>
      <TableCell align="left">{item.price * item.quantity}</TableCell>
    </TableRow>
  );
};

export default CartItem;
