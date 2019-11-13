export const trackInfoSelector = ({
  tracks: {
    currentTrack,
    currentPlaylist,
  },
  auth: {
    user: {
      likedTracksIds,
    },
  },
}) => (
  {
    currentTrack, currentPlaylist, likedTracksIds,
  }
);

export const blank = () => {};
