import { cartActions } from '../reducers/cartReducer';

export const addItem = (item) => {
  return { type: cartActions.ADD_ITEM, payload: item };
};

export const changeQuantity = (item) => {
  return { type: cartActions.CHANGE_QTY, payload: item };
};

export const deleteItem = (id) => {
  return { type: cartActions.DELETE_ITEM, payload: id };
};
