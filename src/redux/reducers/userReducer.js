import * as Zivert from '../../music/Zivert-Credo.mp3';
import * as ZivertCover from '../../assets/TrackIcons/Zivert-Credo.jpg';

const initialState = {
  isLoggedIn: sessionStorage.getItem('authToken'),
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

const userReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export default userReducer;
