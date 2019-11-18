export const convertTime = (timestamp) => {
  if (!timestamp) {
    return '0:00';
  }
  const minutes = Math.floor(timestamp / 60);
  let seconds = timestamp - (minutes * 60);
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  const time = `${minutes}:${seconds}`;
  return time;
};

export const updateTime = (timestamp, setCurrentTime) => {
  const time = Math.floor(timestamp);
  setCurrentTime(time);
};

export const scrubberSelector = ({
  tracks: {
    currentTrack,
    currentPlaylist,
    isPlaying,
  },
  auth: {
    user: {
      username,
    },
  },
}) => (
  {
    currentTrack, currentPlaylist, isPlaying, username,
  }
);

export const blank = () => {};
