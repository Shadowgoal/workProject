import * as Zivert from 'music/Zivert-Credo.mp3';
import * as ZivertCover from 'assets/TrackIcons/Zivert-Credo.jpg';

const initialState = {
  isPlaying: false,
  tracks: [],
  currentPlaylist: [],
  currentTrack: {
    id: 1,
    src: Zivert,
    artist: 'Zivert',
    name: 'Credo',
    duration: 184,
    cover: ZivertCover,
  },
  likedTracksIds: [],
  listenedTracksIds: [],
};

export const setCurrentTrack = (state, { payload }) => ({
  ...state,
  currentTrack: {
    ...payload,
  },
  isPlaying: true,
});

export const setTracks = (state, { payload }) => ({
  ...state,
  tracks: payload,
});

export const setCurrentPlaylist = (state, { payload }) => ({
  ...state,
  currentPlaylist: payload,
});

export const clearCurrentPlaylist = (state) => ({
  ...state,
  currentPlaylist: [
    state.currentTrack,
  ],
});

export const playMusic = (state) => ({
  ...state,
  isPlaying: true,
});

export const pauseMusic = (state) => ({
  ...state,
  isPlaying: false,
});

export const getListened = (state, { payload }) => ({
  ...state,
  listenedTracksIds: payload,
});

export const getLiked = (state, { payload }) => ({
  ...state,
  likedTracksIds: payload,
});

export const likeTrack = (state, { payload }) => ({
  ...state,
  likedTracksIds: payload,
});

export const dislikeTrack = (state, { payload }) => ({
  ...state,
  likedTracksIds: payload,
});

export default initialState;
