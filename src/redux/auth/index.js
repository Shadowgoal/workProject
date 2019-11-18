import { createActions, handleActions } from 'redux-actions';

import initialState, * as handlers from './handlers';

export const actions = createActions({
  SIGN_IN: undefined,
  SIGN_UP: undefined,
  LOG_OUT: undefined,
  LIKE_TRACK: undefined,
  DISLIKE_TRACK: undefined,
  USER_UPDATE: undefined,
  LISTENED_UPDATE: undefined,
  LIKED_UPDATE: undefined,
});

const reducer = handleActions(
  new Map([
    [actions.signIn, handlers.signIn],
    [actions.signUp, handlers.signUp],
    [actions.logOut, handlers.logOut],

    [actions.likeTrack, handlers.likeTrack],
    [actions.dislikeTrack, handlers.dislikeTrack],

    [actions.userUpdate, handlers.userUpdate],
    [actions.listenedUpdate, handlers.listenedUpdate],
    [actions.likedUpdate, handlers.likedUpdate],
  ]),
  initialState,
);

export default reducer;
