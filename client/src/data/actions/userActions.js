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
        payload: err.response.data.error,
      });
    });
};
