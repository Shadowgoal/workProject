export const SIGN_UP = 'SIGN_UP';

export const LOG_OUT = 'LOG_OUT';

export const LOG_IN = 'LOG_IN';

export const PLAY_MUSIC = 'PLAY_MUSIC';

export const PAUSE_MUSIC = 'PAUSE_MUSIC';

export const LIKE_TRACK = 'LIKE_TRACK';

export const UNLIKE_TRACK = 'UNLIKE_TRACK';

export const SET_CURRENT_TRACK = 'SET_CURRENT_TRACK';

export const onRegister = (user) => ({
  type: SIGN_UP,
  isLoggedIn: true,
  payload: user,
});

export const onLogOut = () => ({
  type: LOG_OUT,
  isLoggedIn: false,
  user: {},
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

export const playMusic = () => ({
  type: PLAY_MUSIC,
  isPlaying: true,
});

export const pauseMusic = () => ({
  type: PAUSE_MUSIC,
  isPlaying: false,
});

export const likeTrack = () => ({
  type: LIKE_TRACK,
  currentTrack: {
    liked: true,
  },
  user: {
    likeCounter: +1,
  },
});

export const unlikeTrack = () => ({
  type: UNLIKE_TRACK,
  currentTrack: {
    liked: false,
  },
});
