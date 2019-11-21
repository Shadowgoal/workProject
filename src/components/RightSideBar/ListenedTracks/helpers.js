export const tracksSelector = ({
  tracks: {
    tracks,
    listenedTracksIds,
  },
  auth: {
    user: {
      username,
    },
    isLoggedIn,
  },
}) => {
  const listenedTracks = tracks.filter((el) => listenedTracksIds.includes(el.id));
  return {
    listenedTracks, username, isLoggedIn, listenedTracksIds,
  };
};

export const blank = () => {};
