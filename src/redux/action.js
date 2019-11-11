export const SIGN_UP = 'SIGN_UP';

export const LOG_OUT = 'LOG_OUT';

export const LOG_IN = 'LOG_IN';

export const LIKE_TRACK = 'LIKE_TRACK';

export const UNLIKE_TRACK = 'UNLIKE_TRACK';

export const SET_CURRENT_PLAYLIST = 'SET_CURRENT_PLAYLIST';

export const SET_CURRENT_TRACK = 'SET_CURRENT_TRACK';

export const PLAY_MUSIC = 'PLAY_MUSIC';

export const STOP_MUSIC = 'STOP_MUSIC';

export const CLEAR_CURRENT_PLAYLIST = 'CLEAR_CURRENT_PLAYLIST';

export const onRegister = (user) => ({
  type: SIGN_UP,
  isLoggedIn: true,
  payload: user,
});

export const onLogOut = () => ({
  type: LOG_OUT,
  isLoggedIn: false,
  user: {
    likedTracks: [],
    listenedTracks: [],
  },
});

export const onLogIn = (user) => ({
  type: LOG_IN,
  isLoggedIn: true,
  payload: user,
});

export const setCurrentTrack = (track) => ({
  type: SET_CURRENT_TRACK,
  payload: track,
  isPlaying: true,
});

export const setCurrentPlaylist = (playlist) => ({
  type: SET_CURRENT_PLAYLIST,
  payload: playlist,
  isPlaying: true,
});

export const likeTrack = (currentTrack) => ({
  type: LIKE_TRACK,
  payload: currentTrack,
});

export const unlikeTrack = (currentTrack) => ({
  type: UNLIKE_TRACK,
  payload: currentTrack,
});

export const playMusic = () => ({
  type: PLAY_MUSIC,
  isPlaying: true,
});

export const stopMusic = () => ({
  type: STOP_MUSIC,
  isPlaying: false,
});

export const clearCurrentPlaylist = () => ({
  type: CLEAR_CURRENT_PLAYLIST,
});
