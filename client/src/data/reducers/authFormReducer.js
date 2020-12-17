import { authFormActionTypes } from '../constants/actionTypes';

const authFormReducer = (state = 'login', action) => {
  switch (action.type) {
    case authFormActionTypes.SHOW_LOGIN_FORM:
      return 'login';

    case authFormActionTypes.SHOW_REGISTER_FORM:
      return 'register';

    default:
      return state;
  }
};

export default authFormReducer;
