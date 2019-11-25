export const likedSelector = ({
  tracks: {
    tracks,
    likedTracksIds,
  },
  auth: {
    user: {
      username,
    },
    isLoggedIn,
  },
}) => {
  const likedTracks = tracks.filter((el) => likedTracksIds.includes(el.id));
  return {
    likedTracks, username, isLoggedIn, likedTracksIds,
  };
};

export const blank = () => {};
