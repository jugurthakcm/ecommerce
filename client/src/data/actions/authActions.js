import { authActionTypes } from '../constants/actionTypes';

export const showRegisterForm = () => (dispatch) => {
  return dispatch({ type: authActionTypes.SHOW_REGISTER_FORM });
};

export const showLoginForm = () => (dispatch) => {
  return dispatch({ type: authActionTypes.SHOW_LOGIN_FORM });
};
