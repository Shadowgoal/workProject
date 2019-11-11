import * as Zivert from 'music/Zivert-Credo.mp3';
import * as ZivertCover from 'assets/TrackIcons/Zivert-Credo.jpg';

const initialState = {
  user: {
    likedTracks: [],
    listenedTracks: [],
  },
  currentPlaylist: [],
  currentTrack: {
    id: 1,
    src: Zivert,
    artist: 'Zivert',
    name: 'Credo',
    duration: 184,
    cover: ZivertCover,
    liked: false,
    listened: false,
  },
};

export const likeTrack = (state, { payload }) => {
  const index = state.currentPlaylist.findIndex((el) => el.id === payload.id);
  return {
    ...state,
    currentTrack: {
      ...state.currentTrack,
      liked: state.currentTrack.id === payload.id ? payload.liked : state.currentTrack.liked,
    },
    currentPlaylist: [
      ...state.currentPlaylist.slice(0, index),
      {
        ...state.currentPlaylist[index],
        liked: true,
      },
      ...state.currentPlaylist.slice(index + 1),
    ],
    user: {
      ...state.user,
      likedTracks: [
        ...state.user.likedTracks,
        payload,
      ],
    },
  };
};

export const dislikeTrack = (state, { payload }) => {
  payload.liked = false;
  const index = state.currentPlaylist.findIndex((el) => el.id === payload.id);
  return {
    ...state,
    currentTrack: {
      ...state.currentTrack,
      liked: state.currentTrack.id === payload.id ? payload.liked : state.currentTrack.liked,
    },
    currentPlaylist: [
      ...state.currentPlaylist.slice(0, index),
      {
        ...state.currentPlaylist[index],
        liked: false,
      },
      ...state.currentPlaylist.slice(index + 1),
    ],
    user: {
      ...state.user,
      likedTracks: [
        ...state.user.likedTracks.filter((el) => el.id !== payload.id),
      ],
    },
  };
};

export default initialState;
