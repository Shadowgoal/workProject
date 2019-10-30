import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import * as Zivert from '../music/Zivert-Credo.mp3';
import * as ZivertCover from '../assets/TrackIcons/Zivert-Credo.jpg';

const initialState = {
  isLoggedIn: sessionStorage.getItem('authToken'),
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
    if (state.currentTrack.id === state.currentPlaylist[i].id) {
      state.currentPlaylist[i].liked = state.currentTrack.liked;
      state.currentPlaylist[i].listened = state.currentTrack.listened;
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
    case 'LIKE_TRACK':
      return {
        ...state,
        currentTrack: {
          ...state.currentTrack,
          liked: true,
        },
        user: {
          ...state.user,
          likedTracks: [
            ...state.user.likedTracks,
            action.likedTracks,
          ],
        },
      };
    case 'UNLIKE_TRACK':
      return {
        ...state,
        currentTrack: {
          ...state.currentTrack,
          liked: false,
        },
        user: {
          ...state.user,
          likedTracks: [
            ...state.user.likedTracks.filter((index) => index.id !== action.likedTracks),
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
