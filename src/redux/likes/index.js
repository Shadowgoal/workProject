import { createActions, handleActions } from 'redux-actions';

import initialState, * as handlers from './handlers';

export const actions = createActions({
  LIKE_TRACK: undefined,
  DISLIKE_TRACK: undefined,
});

const reducer = handleActions(
  new Map([
    [actions.likeTrack, handlers.likeTrack],
    [actions.dislikeTrack, handlers.dislikeTrack],
  ]),
  initialState,
);

export default reducer;
