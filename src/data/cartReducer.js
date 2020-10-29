export const initialCart = { item: {} };

export const cartActions = {
  ADD_ITEM: 'ADD_ITEM',
};

export const cartReducer = (state, action) => {
  console.log(action);
  switch (action) {
    case cartActions.ADD_ITEM:
      return { ...state, item: action.item };

    default:
      return state;
  }
};
