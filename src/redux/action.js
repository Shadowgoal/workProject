export const SIGN_UP = 'SIGN_UP';

export const LOG_OUT = 'LOG_OUT';

export const LOG_IN = 'LOG_IN';

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
});
