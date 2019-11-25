export const trackInfoSelector = ({
  tracks: {
    currentTrack,
    currentPlaylist,
    likedTracksIds,
  },
  auth: {
    user: {
      username,
    },
  },
}) => (
  {
    currentTrack, currentPlaylist, likedTracksIds, username,
  }
);

export const blank = () => {};
