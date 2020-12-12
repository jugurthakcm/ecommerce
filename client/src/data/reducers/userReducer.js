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
      return { ...state, user: action.payload.data };

    case userActionTypes.ERROR_LOGIN:
      localStorage.removeItem('token');
      return { ...state, error: action.payload.response.data };

    case userActionTypes.LOAD_USER:
      return { ...state, user: action.payload.data };

    case userActionTypes.ERROR_LOAD_USER:
      return { ...state, error: action.payload.response };

    default:
      return state;
  }
};

export default userReducer;
