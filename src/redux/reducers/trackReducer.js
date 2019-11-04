import * as Zivert from '../../music/Zivert-Credo.mp3';
import * as ZivertCover from '../../assets/TrackIcons/Zivert-Credo.jpg';

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

const trackReducer = (state = initialState, action) => {
  switch (action.type) {
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

export default trackReducer;
