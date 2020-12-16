const { userActionTypes } = require('../constants/actionTypes');

const initialState = {
  token: localStorage.getItem('token'),
  user: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    //REGISTER
    case userActionTypes.REGISTER:
      return { ...state, user: action.payload.data };

    //REGISTER_FAIL
    case userActionTypes.ERROR_REGISTER:
      return {
        ...state,
        user: null,
        error: action.payload.response.data,
      };

    //LOGIN
    case userActionTypes.LOGIN:
      localStorage.setItem('token', action.payload.data.token);
      return {
        ...state,
        user: action.payload.data,
        token: action.payload.data.token,
      };

    //LOGIN FAIL
    case userActionTypes.ERROR_LOGIN:
      localStorage.removeItem('token');
      return {
        ...state,
        error: action.payload.response.data,
      };

    //LOAD USER
    case userActionTypes.LOAD_USER:
      return { ...state, user: action.payload.data };

    //LOAD USER FAIL
    case userActionTypes.ERROR_LOAD_USER:
      return {
        ...state,
        user: null,
        error: action.payload.response.data.error,
      };

    //LOGOUT
    case userActionTypes.LOGOUT:
      localStorage.removeItem('token');
      return { ...state, user: null, token: null };

    default:
      return state;
  }
};

export default userReducer;
