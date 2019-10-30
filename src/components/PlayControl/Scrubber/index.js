import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import * as S from './styled';

const Scrubber = ({
  audioPlayer,
  onNextUp,
}) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setCurrentProgress] = useState(0);
  const [scrubberInterval, setScrubberInterval] = useState(null);
  const currentTrack = useSelector((state) => state.currentTrack);
  const isPlaying = useSelector((state) => state.isPlaying);

  const updateTime = (timestamp) => {
    const time = Math.floor(timestamp);
    setCurrentTime(time);
  };

  useEffect(() => {
    if (currentTrack && isPlaying) {
      audioPlayer.current.play();
    }
    if (currentTrack && !isPlaying) {
      audioPlayer.current.pause();
    }
    if (!scrubberInterval && isPlaying) {
      const intervalId = setInterval(() => {
        const current = audioPlayer.current.currentTime;
        const dur = audioPlayer.current.duration;
        const percent = (current / dur) * 100;
        setCurrentProgress(percent);
        updateTime(current);
        if (current === dur) {
          onNextUp();
        }
      }, 1000);
      setScrubberInterval(intervalId);
    }

    return function cleanup() {
      clearInterval(scrubberInterval);
      if (scrubberInterval) {
        setScrubberInterval(null);
      }
    };
  }, [scrubberInterval, audioPlayer, currentTrack, isPlaying, onNextUp]);

  const updateCurrentTime = (e) => {
    setCurrentTime(e.target.value);
    audioPlayer.current.currentTime = currentTime;
    const dur = audioPlayer.current.duration;
    const percent = (currentTime / dur) * 100;
    setCurrentProgress(percent);
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
  onNextUp: PropTypes.func.isRequired,
};

export default Scrubber;
