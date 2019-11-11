import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import * as Zivert from '../music/Zivert-Credo.mp3';
import * as ZivertCover from '../assets/TrackIcons/Zivert-Credo.jpg';

const initialState = {
  isLoggedIn: localStorage.getItem('authToken'),
  isPlaying: false,
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_UP':
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case 'LOG_OUT':
      return {
        ...state,
        isLoggedIn: false,
        user: {
          likedTracks: [],
          listenedTracks: [],
        },
      };
    case 'LOG_IN':
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case 'SET_CURRENT_PLAYLIST':
      return {
        ...state,
        currentPlaylist: action.payload,
      };
    case 'SET_CURRENT_TRACK': {
      const index = state.user.listenedTracks.findIndex((el) => el.id === action.payload.id);
      return {
        ...state,
        currentTrack: {
          ...action.payload,
          listened: true,
          liked: action.payload.liked,
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
    }
    case 'CLEAR_CURRENT_PLAYLIST':
      return {
        ...state,
        currentPlaylist: [
          state.currentTrack,
        ],
      };
    case 'LIKE_TRACK': {
      const index = state.currentPlaylist.findIndex((el) => el.id === action.payload.id);
      return {
        ...state,
        currentTrack: {
          ...state.currentTrack,
          liked: state.currentTrack.id === action.payload.id ? action.payload.liked : state.currentTrack.liked,
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
            action.payload,
          ],
        },
      };
    }
    case 'UNLIKE_TRACK': {
      action.payload.liked = false;
      const index = state.currentPlaylist.findIndex((el) => el.id === action.payload.id);
      return {
        ...state,
        currentTrack: {
          ...state.currentTrack,
          liked: state.currentTrack.id === action.payload.id ? action.payload.liked : state.currentTrack.liked,
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
            ...state.user.likedTracks.filter((el) => el.id !== action.payload.id),
          ],
        },
      };
    }
    case 'PLAY_MUSIC':
      return {
        ...state,
        isPlaying: true,
      };
    case 'STOP_MUSIC':
      return {
        ...state,
        isPlaying: false,
      };
    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

export default store;
