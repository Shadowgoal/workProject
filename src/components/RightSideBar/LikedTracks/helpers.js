export const likedSelector = ({
  tracks: {
    currentPlaylist,
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
    likedTracks, username, isLoggedIn,
  };
};

export const blank = () => {};
