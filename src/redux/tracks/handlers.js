const initialState = {
  isPlaying: false,
  user: {
    likedTracks: [],
    listenedTracks: [],
  },
  currentPlaylist: [],
  currentTrack: {},
};

export const setCurrentTrack = (state, { payload }) => {
  const index = state.user.listenedTracks.findIndex((el) => el.id === payload.id);
  return {
    ...state,
    currentTrack: {
      ...payload,
      listened: true,
      liked: payload.liked,
    },
    user: {
      ...state.user,
      listenedTracks: [
        ...state.user.listenedTracks.splice(index, index > -1 ? 1 : 0),
        state.currentTrack,
      ],
    },
    isPlaying: true,
  };
};

export const setCurrentPlaylist = (state, { payload }) => ({
  ...state,
  currentPlaylist: payload,
});

export const clearCurrentPlaylist = (state) => ({
  ...state,
  currentPlaylist: state.currentTrack,
});

export const playMusic = (state) => ({
  ...state,
  isPlaying: true,
});

export const pauseMusic = (state) => ({
  ...state,
  isPlaying: false,
});

export default initialState;
