import { itemActionTypes } from '../constants/actionTypes';

const initialState = {
  items: [],
  trendingItems: [],
  oneItem: null,
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case itemActionTypes.GET_ITEMS:
      return { ...state, items: action.payload };

    case itemActionTypes.TRENDING_ITEMS:
      return { ...state, trendingItems: action.payload };

    case itemActionTypes.GET_ONE_ITEM:
      return { ...state, oneItem: action.payload };

    default:
      return state;
  }
};

export default itemReducer;
