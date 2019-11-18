import { getToken, getUsername } from 'services/localStorageServices';

const initialState = {
  isLoggedIn: getToken(),
  user: {
    username: getUsername(),
    likedTracksIds: [],
    listenedTracksIds: [],
  },
};

export const signIn = (state, { payload }) => ({
  ...state,
  isLoggedIn: true,
  user: payload,
});

export const signUp = (state, { payload }) => ({
  ...state,
  isLoggedIn: true,
  user: payload,
});

export const logOut = (state) => ({
  ...state,
  user: {
    likedTracksIds: [],
    listenedTracksIds: [],
  },
  isLoggedIn: false,
});

export const likeTrack = (state, { payload }) => ({
  ...state,
  user: payload,
});

export const dislikeTrack = (state, { payload }) => ({
  ...state,
  user: payload,
});

export const userUpdate = (state, { payload }) => ({
  ...state,
  user: payload,
});

export const listenedUpdate = (state, { payload }) => ({
  ...state,
  user: {
    ...state.user,
    listenedTracksIds: payload,
  },
});

export const likedUpdate = (state, { payload }) => ({
  ...state,
  user: {
    ...state.user,
    likedTracksIds: payload,
  },
});

export default initialState;
