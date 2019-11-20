export const recentlyPlayedSelector = ({
  tracks: {
    currentPlaylist,
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
  const listenedTracks = currentPlaylist.filter((el) => listenedTracksIds.includes(el.id));
  return {
    currentTrack, listenedTracks, isPlaying, username, isLoggedIn,
  };
};

export const blank = () => {};
