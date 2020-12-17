import { itemActionTypes } from '../constants/actionTypes';

const initialState = {
  items: [],
  trendingItems: [],
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case itemActionTypes.GET_ITEMS:
      return { ...state, items: action.payload };

    case itemActionTypes.TRENDING_ITEMS:
      return { ...state, trendingItems: action.payload };

    default:
      return state;
  }
};

export default itemReducer;
