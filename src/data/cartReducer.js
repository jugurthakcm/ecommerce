export const initialCart = { item: {} };

export const itemActions = {
  ADD_ITEM: 'ADD_ITEM',
};

export const cartReducer = (state, action) => {
  console.log(action);
  switch (action) {
    case itemActions.ADD_ITEM:
      return { ...state, notification: action.item };

    default:
      return state;
  }
};
