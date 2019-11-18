export const trackInfoSelector = ({
  tracks: {
    currentTrack,
    currentPlaylist,
  },
  auth: {
    user: {
      username,
      likedTracksIds,
    },
  },
}) => (
  {
    currentTrack, currentPlaylist, likedTracksIds, username,
  }
);

export const blank = () => {};
