import { combineReducers } from 'redux';
import authFormReducer from './authFormReducer';
import itemReducer from './itemReducer';
import userReducer from './userReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  authForm: authFormReducer,
  user: userReducer,
  item: itemReducer,
  cart: cartReducer,
});

export default rootReducer;
