import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import auth from './auth';
import tracks from './tracks';

const reducer = combineReducers({
  auth,
  tracks,
});

const store = createStore(reducer, composeWithDevTools());

export default store;
