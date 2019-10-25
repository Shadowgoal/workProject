import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import * as S from './styled';

const Scrubber = ({
  audioPlayer,
  onPlayBtn,
  isPlaying,
  setIsPlaying,
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
      }, 1000);
      setScrubberInterval(intervalId);
    }

    return function cleanup() {
      clearInterval(scrubberInterval);
      if (scrubberInterval) {
        setScrubberInterval(null);
      }
    };
  }, [scrubberInterval]);

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
      <S.Scrubber>
        <S.ProgressScrubber updateScrubber={progress} />
      </S.Scrubber>
      <S.Duration>{convertTime(currentTrack.duration)}</S.Duration>
    </S.Container>
  );
};

Scrubber.propTypes = {
  audioPlayer: PropTypes.object.isRequired,
  onPlayBtn: PropTypes.func.isRequired,
  isPlaying: PropTypes.object.isRequired,
  setIsPlaying: PropTypes.func.isRequired,
};

export default Scrubber;
