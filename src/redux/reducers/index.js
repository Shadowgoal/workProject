import { combineReducers } from 'redux';

import likeReducer from './likeReducer';
import trackReducer from './trackReducer';
import userReducer from './userReducer';

export default combineReducers({
  likeReducer,
  trackReducer,
  userReducer,
});
