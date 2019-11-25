import { getToken, getUsername } from 'services/localStorageServices';

const initialState = {
  isLoggedIn: getToken(),
  user: {
    username: getUsername(),
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

export const userUpdate = (state, { payload }) => ({
  ...state,
  user: payload,
});

export default initialState;
