export const recentlyPlayedSelector = ({
  tracks: {
    tracks,
    currentTrack,
    isPlaying,
    listenedTracksIds,
  },
  auth: {
    user: {
      username,
    },
    isLoggedIn,
  },
}) => {
  const listenedTracks = tracks.filter((el) => listenedTracksIds.includes(el.id));
  return {
    currentTrack, listenedTracks, isPlaying, username, isLoggedIn, listenedTracksIds,
  };
};

export const blank = () => {};
