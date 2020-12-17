import axios from '../../axios';
import { itemActionTypes } from '../constants/actionTypes';

export const getItems = () => (dispatch) => {
  axios
    .get('/items')
    .then((res) =>
      dispatch({ type: itemActionTypes.GET_ITEMS, payload: res.data })
    )
    .catch((err) => console.log(err));
};

export const trendingItems = () => (dispatch) => {
  axios
    .get('/items/trending')
    .then((res) =>
      dispatch({ type: itemActionTypes.TRENDING_ITEMS, payload: res.data })
    )
    .catch((err) => console.log(err));
};
