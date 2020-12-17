import { combineReducers } from 'redux';
import authFormReducer from './authFormReducer';
import itemReducer from './itemReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  authForm: authFormReducer,
  user: userReducer,
  item: itemReducer,
});

export default rootReducer;
