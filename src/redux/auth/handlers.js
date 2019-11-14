import { getToken, getUsername } from 'services/localStorageServices';

const initialState = {
  isLoggedIn: getToken(),
  user: {
    username: getUsername(),
    likedTracksIds: [],
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
  },
  isLoggedIn: false,
});

export const likeTrack = (state, { payload }) => ({
  ...state,
  user: { payload },
});

export const dislikeTrack = (state, { payload }) => ({
  ...state,
  user: { payload },
});

export default initialState;
