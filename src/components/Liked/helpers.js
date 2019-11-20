export const tracksSelector = ({
  tracks: {
    currentTrack,
    currentPlaylist,
    isPlaying,
    likedTracksIds,
  },
  auth: {
    user: {
      username,
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
