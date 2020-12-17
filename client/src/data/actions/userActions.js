import axios from '../../axios';
import { userActionTypes } from '../constants/actionTypes';

export const registerUSer = ({ firstName, lastName, email, password }) => (
  dispatch
) => {
  axios
    .post('/register', {
      firstName,
      lastName,
      email,
      password,
    })
    .then((res) => {
      return dispatch({ type: userActionTypes.REGISTER, payload: res });
    })
    .catch((err) => {
      return dispatch({
        type: userActionTypes.ERROR_REGISTER,
        payload: err,
      });
    });
};

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

export const logout = () => {
  return { type: userActionTypes.LOGOUT };
};
