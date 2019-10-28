import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import * as S from './styled';

const Scrubber = ({
  audioPlayer,
  onPlayBtn,
  isPlaying,
  setIsPlaying,
  onNextUp,
}) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setCurrentProgress] = useState(0);
  const [scrubberInterval, setScrubberInterval] = useState(null);
  const currentTrack = useSelector((state) => state.currentTrack);

  const updateTime = (timestamp) => {
    const time = Math.floor(timestamp);
    setCurrentTime(time);
  };

  useEffect(() => {
    if (currentTrack && !isPlaying) {
      onPlayBtn(true);
      setIsPlaying(true);
    }
    if (!scrubberInterval) {
      const intervalId = setInterval(() => {
        const current = audioPlayer.current.currentTime;
        const dur = audioPlayer.current.duration;
        const percent = (current / dur) * 100;
        setCurrentProgress(percent);
        updateTime(current);
        if (current === dur) {
          onNextUp();
        }
      }, 500);
      setScrubberInterval(intervalId);
    }

    return function cleanup() {
      clearInterval(scrubberInterval);
      if (scrubberInterval) {
        setScrubberInterval(null);
      }
    };
  }, [scrubberInterval]);

  const updateCurrentTime = (e) => {
    setCurrentTime(e.target.value);
    audioPlayer.current.currentTime = currentTime;
  };

  const convertTime = (timestamp) => {
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

  return (
    <S.Container>
      <S.CurrentTime>{convertTime(currentTime)}</S.CurrentTime>
      <S.Scrubber
        type="range"
        onChange={updateCurrentTime}
        onClick={updateCurrentTime}
        value={currentTime}
        max={currentTrack.duration}
        min="0"
        step="1"
        progress={progress}
      />
      <S.Duration>{convertTime(currentTrack.duration)}</S.Duration>
    </S.Container>
  );
};

Scrubber.propTypes = {
  audioPlayer: PropTypes.object.isRequired,
  onPlayBtn: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool,
  setIsPlaying: PropTypes.func.isRequired,
  onNextUp: PropTypes.func.isRequired,
};

Scrubber.defaultProps = {
  isPlaying: null,
};

export default Scrubber;
