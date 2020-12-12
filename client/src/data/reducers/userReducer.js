const { userActionTypes } = require('../constants/actionTypes');

const initialState = {
  token: localStorage.getItem('token'),
  user: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.LOGIN:
      localStorage.setItem('token', action.payload.data.token);
      return { ...state, user: action.payload };

    case userActionTypes.ERROR_LOGIN:
      localStorage.removeItem('token');
      return { ...state, error: action.payload };

    case userActionTypes.LOAD_USER:
      return { ...state, user: action.payload };

    case userActionTypes.ERROR_LOAD_USER:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default userReducer;
