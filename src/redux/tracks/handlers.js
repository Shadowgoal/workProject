import * as Zivert from 'music/Zivert-Credo.mp3';
import * as ZivertCover from 'assets/TrackIcons/Zivert-Credo.jpg';

const initialState = {
  isPlaying: false,
  listenedTracks: [],
  currentPlaylist: [],
  currentTrack: {
    id: 1,
    src: Zivert,
    artist: 'Zivert',
    name: 'Credo',
    duration: 184,
    cover: ZivertCover,
    listened: false,
  },
};

export const setCurrentTrack = (state, { payload }) => ({
  ...state,
  currentTrack: {
    ...payload,
    listened: true,
  },
  listenedTracks: [
    ...state.listenedTracks.filter((el) => el.id !== payload.id),
    payload,
  ],
  isPlaying: true,
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

export default initialState;
