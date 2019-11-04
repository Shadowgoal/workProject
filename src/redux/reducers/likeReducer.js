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

const likeReducer = (state = initialState, action) => {
  for (let i = 0; i < state.currentPlaylist.length; i += 1) {
    for (let j = 0; j < state.user.likedTracks.length; j += 1) {
      if (state.currentPlaylist[i].id === state.user.likedTracks[j].id) {
        state.user.likedTracks[j].liked = state.currentPlaylist[i].liked;
      }
    }
  }
  switch (action.type) {
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
    default:
      return state;
  }
};

export default likeReducer;
