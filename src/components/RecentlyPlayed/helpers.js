export const recentlyPlayedSelector = ({
  tracks: {
    currentPlaylist,
    currentTrack,
    isPlaying,
  },
  auth: {
    user: {
      username,
      listenedTracksIds,
    },
    isLoggedIn,
  },
}) => {
  const listenedTracks = currentPlaylist.filter((el) => listenedTracksIds.includes(el.id));
  return {
    currentTrack, listenedTracks, isPlaying, username, isLoggedIn,
  };
};

export const blank = () => {};
