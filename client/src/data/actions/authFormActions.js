import { authFormActionTypes } from '../constants/actionTypes';

export const showRegisterForm = () => {
  return { type: authFormActionTypes.SHOW_REGISTER_FORM };
};

export const showLoginForm = () => {
  return { type: authFormActionTypes.SHOW_LOGIN_FORM };
};
