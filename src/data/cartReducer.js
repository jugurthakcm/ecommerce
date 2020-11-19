export const initialCart = [];

export const cartActions = {
  ADD_ITEM: 'ADD_ITEM',
  DELETE_ITEM: 'DELETE_ITEM',
  CHANGE_QTY: 'CHANGE_QTY',
};

export const cartReducer = (state = initialCart, action) => {
  switch (action.type) {
    case cartActions.ADD_ITEM:
      let index = null;
      for (const el of state) {
        if (el.id === action.item.id) {
          index = state.indexOf(el);
        }
      }

      if (index !== null) {
        const el = state[index];
        Object.assign(el, {
          quantity: el.quantity + action.item.quantity,
        });
        return [...state];
      } else {
        return [...state, action.item];
      }

    case cartActions.DELETE_ITEM:
      return state.filter((e) => e.id !== action.deletedItem);

    case cartActions.CHANGE_QTY:
      return state.map((e) =>
        e.id === action.item.id
          ? Object.assign(e, { quantity: action.item.quantity })
          : e
      );

    default:
      return state;
  }
};
