import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import authReducer from './auth';
import tracksReducer from './tracks';
import likesReducer from './likes';

const reducer = combineReducers({
  authReducer,
  tracksReducer,
  likesReducer,
});

const store = createStore(reducer, composeWithDevTools());

export default store;
