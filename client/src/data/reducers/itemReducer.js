import { itemActionTypes } from '../constants/actionTypes';

const initialState = {
  items: [],
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case itemActionTypes.GET_ITEMS:
      return { ...state, items: action.payload };

    default:
      return state;
  }
};

export default itemReducer;
