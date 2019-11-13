export const tracksSelector = ({
  tracks: {
    currentTrack,
    currentPlaylist,
    isPlaying,
  },
  auth: {
    user: {
      likedTracksIds,
    },
  },
}) => {
  const likedTracks = currentPlaylist.filter((el) => likedTracksIds.includes(el.id));
  return {
    currentTrack, isPlaying, likedTracks,
  };
};

export const blank = () => {};
