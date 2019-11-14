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
  },
}) => {
  const likedTracks = currentPlaylist.filter((el) => likedTracksIds.includes(el.id));
  return {
    currentTrack, isPlaying, likedTracks, username,
  };
};

export const blank = () => {};
