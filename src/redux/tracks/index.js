import { createActions, handleActions } from 'redux-actions';

import initialState, * as handlers from './handlers';

export const actions = createActions({
  SET_CURRENT_TRACK: undefined,
  SET_TRACKS: undefined,
  SET_CURRENT_PLAYLIST: undefined,
  CLEAR_CURRENT_PLAYLIST: undefined,
  PLAY_MUSIC: undefined,
  PAUSE_MUSIC: undefined,
  GET_LISTENED: undefined,
  GET_LIKED: undefined,
  LIKE_TRACK: undefined,
  DISLIKE_TRACK: undefined,
});

const reducer = handleActions(
  new Map([
    [actions.setCurrentTrack, handlers.setCurrentTrack],
    [actions.setTracks, handlers.setTracks],
    [actions.setCurrentPlaylist, handlers.setCurrentPlaylist],
    [actions.clearCurrentPlaylist, handlers.clearCurrentPlaylist],

    [actions.playMusic, handlers.playMusic],
    [actions.pauseMusic, handlers.pauseMusic],

    [actions.getListened, handlers.getListened],
    [actions.getLiked, handlers.getLiked],

    [actions.likeTrack, handlers.likeTrack],
    [actions.dislikeTrack, handlers.dislikeTrack],
  ]),
  initialState,
);

export default reducer;
