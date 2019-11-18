export const likedSelector = ({
  tracks: {
    currentPlaylist,
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
    likedTracks, username, isLoggedIn,
  };
};

export const blank = () => {};
