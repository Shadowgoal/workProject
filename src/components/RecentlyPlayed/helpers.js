export const recentlyPlayedSelector = ({
  tracks: {
    listenedTracks,
    currentTrack,
    isPlaying,
  },
}) => (
  {
    currentTrack, listenedTracks, isPlaying,
  }
);

export const blank = () => {};
