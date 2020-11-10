export const initialCart = [];

export const cartActions = {
  ADD_ITEM: 'ADD_ITEM',
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case cartActions.ADD_ITEM:
      return [...state, action.item];

    default:
      return state;
  }
};
