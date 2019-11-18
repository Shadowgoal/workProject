export const playControlSelector = ({
  tracks: {
    currentTrack,
    currentPlaylist,
    isPlaying,
  },
  auth: {
    isLoggedIn,
  },
}) => (
  {
    currentTrack, currentPlaylist, isPlaying, isLoggedIn,
  }
);

export const blank = () => {};
