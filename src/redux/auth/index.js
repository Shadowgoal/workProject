import { createActions, handleActions } from 'redux-actions';

import initialState, * as handlers from './handlers';

export const actions = createActions({
  SIGN_IN: undefined,
  SIGN_UP: undefined,
  LOG_OUT: undefined,
});

const reducer = handleActions(
  new Map([
    [actions.signIn, handlers.signIn],
    [actions.signUp, handlers.signUp],
    [actions.logOut, handlers.logOut],
  ]),
  initialState,
);

export default reducer;
