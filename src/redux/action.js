export const SIGN_UP = 'SIGN_UP';

export const LOG_OUT = 'LOG_OUT';

export const LOG_IN = 'LOG_IN';

export const LIKE_TRACK = 'LIKE_TRACK';

export const UNLIKE_TRACK = 'UNLIKE_TRACK';

export const SET_CURRENT_PLAYLIST = 'SET_CURRENT_PLAYLIST';

export const SET_CURRENT_TRACK = 'SET_CURRENT_TRACK';

export const PLAY_MUISIC = 'PLAY_MUISIC';

export const STOP_MUISIC = 'STOP_MUISIC';

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
  currentTrack: {
    liked: true,
  },
  likedTracks: currentTrack,
});

export const unlikeTrack = (id) => ({
  type: UNLIKE_TRACK,
  currentTrack: {
    liked: false,
  },
  likedTracks: id,
});

export const playMusic = () => ({
  type: PLAY_MUISIC,
  isPlaying: true,
});

export const stopMusic = () => ({
  type: STOP_MUISIC,
  isPlaying: false,
});
