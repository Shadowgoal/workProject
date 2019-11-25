export const tracksSelector = ({
  tracks: {
    currentTrack,
    tracks,
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
  const likedTracks = tracks.filter((el) => likedTracksIds.includes(el.id));
  return {
    currentTrack, isPlaying, likedTracks, username, isLoggedIn, likedTracksIds, tracks,
  };
};

export const blank = () => {};
