export const tracksSelector = ({
  tracks: {
    currentPlaylist,
  },
  auth: {
    user: {
      username,
      listenedTracksIds,
    },
    isLoggedIn,
  },
}) => {
  const listenedTracks = currentPlaylist.filter((el) => listenedTracksIds.includes(el.id));
  return {
    listenedTracks, username, isLoggedIn,
  };
};

export const blank = () => {};
