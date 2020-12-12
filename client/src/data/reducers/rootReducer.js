import { combineReducers } from 'redux';
import authFormReducer from './authFormReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  authForm: authFormReducer,
  user: userReducer,
});

export default rootReducer;
