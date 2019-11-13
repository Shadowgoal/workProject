export const likedSelector = ({
  tracks: {
    currentPlaylist,
  },
  auth: {
    user: {
      likedTracksIds,
    },
  },
}) => {
  const likedTracks = currentPlaylist.filter((el) => likedTracksIds.includes(el.id));
  return {
    likedTracks,
  };
};

export const blank = () => {};
