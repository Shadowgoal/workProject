import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import * as Zivert from '../music/Zivert-Credo.mp3';
import * as ZivertCover from '../assets/TrackIcons/Zivert-Credo.jpg';

const initialState = {
  isLoggedIn: true,
  user: {
    likeCouner: 0,
  },
  currentTrack: {
    id: 1,
    src: Zivert,
    artist: 'Zivert',
    name: 'Credo',
    duration: 184,
    cover: ZivertCover,
    liked: false,
  },
  isPlaying: false,
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
        user: {},
      };
    case 'LOG_IN':
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case 'SET_CURRENT_TRACK':
      return {
        ...state,
        currentTrack: action.payload,
        isPlaying: true,
      };
    case 'PLAY_MUSIC':
      return {
        ...state,
        isPlaying: true,
      };
    case 'PAUSE_MUSIC':
      return {
        ...state,
        isPlaying: false,
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
          likeCouner: +1,
        },
      };
    case 'UNLIKE_TRACK':
      return {
        ...state,
        currentTrack: {
          ...state.currentTrack,
          liked: false,
        },
      };
    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

export default store;
