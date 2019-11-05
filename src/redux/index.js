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
  for (let i = 0; i < state.currentPlaylist.length; i += 1) {
    for (let j = 0; j < state.user.likedTracks.length; j += 1) {
      if (state.currentPlaylist[i].id === state.user.likedTracks[j].id) {
        state.user.likedTracks[j].liked = state.currentPlaylist[i].liked;
      }
    }
  }
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
    case 'SET_CURRENT_TRACK':
      for (let i = 0; i < state.user.listenedTracks.length; i += 1) {
        if (state.currentTrack.id === state.user.listenedTracks[i].id) {
          state.user.listenedTracks.splice(i, 1);
        }
      }
      return {
        ...state,
        currentTrack: {
          ...action.payload,
          listened: true,
        },
        user: {
          ...state.user,
          listenedTracks: [
            ...state.user.listenedTracks,
            state.currentTrack,
          ],
        },
        isPlaying: true,
      };
    case 'CLEAR_CURRENT_PLAYLIST':
      return {
        ...state,
        currentPlaylist: [
          state.currentTrack,
        ],
      };
    case 'LIKE_TRACK':
      for (let i = 0; i < state.user.likedTracks.length; i += 1) {
        if (state.user.likedTracks[i].id === action.likedTracks.id) {
          state.user.likedTracks[i].liked = action.likedTracks.liked;
        }
      }
      for (let i = 0; i < state.currentPlaylist.length; i += 1) {
        if (state.currentPlaylist[i].id === action.likedTracks.id) {
          state.currentPlaylist[i].liked = action.likedTracks.liked;
        }
      }
      if (action.likedTracks.id === state.currentTrack.id) {
        state.currentTrack.liked = action.likedTracks.liked;
      }
      return {
        ...state,
        user: {
          ...state.user,
          likedTracks: [
            ...state.user.likedTracks,
            action.likedTracks,
          ],
        },
      };
    case 'UNLIKE_TRACK':
      for (let i = 0; i < state.user.likedTracks.length; i += 1) {
        if (state.user.likedTracks[i].id === action.likedTracks.id) {
          state.user.likedTracks[i].liked = action.likedTracks.liked;
        }
      }
      for (let i = 0; i < state.currentPlaylist.length; i += 1) {
        if (state.currentPlaylist[i].id === action.likedTracks.id) {
          state.currentPlaylist[i].liked = action.likedTracks.liked;
        }
      }
      if (action.likedTracks.id === state.currentTrack.id) {
        state.currentTrack.liked = action.likedTracks.liked;
      }
      return {
        ...state,
        user: {
          ...state.user,
          likedTracks: [
            ...state.user.likedTracks.filter((index) => index.id !== action.likedTracks.id),
          ],
        },
      };
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
