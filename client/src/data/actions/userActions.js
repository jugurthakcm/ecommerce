import axios from '../../axios';
import { userActionTypes } from '../constants/actionTypes';

export const loginUser = ({ email, password }) => (dispatch) => {
  axios
    .post('/login', {
      email,
      password,
    })
    .then((res) => {
      return dispatch({ type: userActionTypes.LOGIN, payload: res });
    })
    .catch((err) => {
      return dispatch({
        type: userActionTypes.ERROR_LOGIN,
        payload: err,
      });
    });
};

export const loadUser = (token) => (dispatch) => {
  axios
    .get('/user', {
      headers: {
        'x-access-token': token,
      },
    })
    .then((res) => {
      return dispatch({ type: userActionTypes.LOAD_USER, payload: res });
    })
    .catch((err) => {
      return dispatch({
        type: userActionTypes.ERROR_LOAD_USER,
        payload: err,
      });
    });
};
