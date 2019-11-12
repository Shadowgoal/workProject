import { createActions, handleActions } from 'redux-actions';

import initialState, * as handlers from './handlers';

export const actions = createActions({
  SIGN_IN: undefined,
  SIGN_UP: undefined,
  LOG_OUT: undefined,
  LIKE_TRACK: undefined,
  DISLIKE_TRACK: undefined,
});

const reducer = handleActions(
  new Map([
    [actions.signIn, handlers.signIn],
    [actions.signUp, handlers.signUp],
    [actions.logOut, handlers.logOut],
    [actions.likeTrack, handlers.likeTrack],
    [actions.dislikeTrack, handlers.dislikeTrack],
  ]),
  initialState,
);

export default reducer;
