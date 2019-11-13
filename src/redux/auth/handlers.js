import { getToken } from 'services/localStorageServices';

const initialState = {
  isLoggedIn: getToken(),
  user: {
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
  user: {
    ...state.user,
    likedTracksIds: [
      ...state.user.likedTracksIds,
      payload.id,
    ],
  },
});

export const dislikeTrack = (state, { payload }) => ({
  ...state,
  user: {
    ...state.user,
    likedTracksIds: [
      ...state.user.likedTracksIds.filter((el) => el !== payload.id),
    ],
  },
});

export default initialState;
