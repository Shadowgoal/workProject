export const tracksSelector = ({
  tracks: {
    currentPlaylist,
    listenedTracksIds,
  },
  auth: {
    user: {
      username,
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
