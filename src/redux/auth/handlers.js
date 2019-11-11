const initialState = {
  isLoggedIn: localStorage.getItem('authToken'),
  user: {
    likedTracks: [],
    listenedTracks: [],
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
    likedTracks: [],
    listenedTracks: [],
  },
});

export default initialState;
