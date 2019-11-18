export const tracksSelector = ({
  tracks: {
    currentTrack,
    currentPlaylist,
    isPlaying,
  },
  auth: {
    user: {
      username,
      likedTracksIds,
    },
    isLoggedIn,
  },
}) => {
  const likedTracks = currentPlaylist.filter((el) => likedTracksIds.includes(el.id));
  return {
    currentTrack, isPlaying, likedTracks, username, isLoggedIn,
  };
};

export const blank = () => {};
