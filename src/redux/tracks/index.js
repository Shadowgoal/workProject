import { createActions, handleActions } from 'redux-actions';

import initialState, * as handlers from './handlers';

export const actions = createActions({
  SET_CURRENT_TRACK: undefined,
  SET_CURRENT_PLAYLIST: undefined,
  CLEAR_CURRENT_PLAYLIST: undefined,
  PLAY_MUSIC: undefined,
  PAUSE_MUSIC: undefined,
});

const reducer = handleActions(
  new Map([
    [actions.setCurrentTrack, handlers.setCurrentTrack],
    [actions.setCurrentPlaylist, handlers.setCurrentPlaylist],
    [actions.clearCurrentPlaylist, handlers.clearCurrentPlaylist],
    [actions.playMusic, handlers.playMusic],
    [actions.pauseMusic, handlers.pauseMusic],
  ]),
  initialState,
);

export default reducer;
