import { authActionTypes } from '../constants/actionTypes';

export const authReducer = (state = 'login', action) => {
  switch (action.type) {
    case authActionTypes.SHOW_LOGIN_FORM:
      return 'login';

    case authActionTypes.SHOW_REGISTER_FORM:
      return 'register';

    default:
      return state;
  }
};
