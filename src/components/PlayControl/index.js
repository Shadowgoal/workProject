import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Scrubber from './Scrubber';
import TrackInfo from './TrackInfo';

import * as S from './styled';

const PlayControl = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setCurrentProgress] = useState(0);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const currentTrack = useSelector((state) => state.currentTrack);
  const isPlaying = useSelector((state) => state.isPlaying);
  const dispatch = useDispatch();
  const playMusic = () => { dispatch({ type: 'PLAY_MUSIC' }); };
  const pauseMusic = () => { dispatch({ type: 'PAUSE_MUSIC' }); };
  const audioPlayer = useRef(null);

  const updateTime = (timestamp) => {
    const time = Math.floor(timestamp);
    setCurrentTime(time);
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

  const scrubberWidth = setInterval(() => {
    if (isPlaying) {
      const current = audioPlayer.current.currentTime;
      const dur = audioPlayer.current.duration;
      const percent = Math.round((current / dur) * 100);

      setCurrentProgress(percent);
      updateTime(current);
    } else {
      clearInterval(scrubberWidth);
    }
  }, 500);

  const onPlayBtn = () => {
    if (!isPlaying) {
      playMusic();
      audioPlayer.current.play();
    } else if (isPlaying) {
      pauseMusic();
      audioPlayer.current.pause();
      clearInterval(scrubberWidth);
    }
  };

  return (
    <S.PlayControlContainer visible={isLoggedIn}>
      <S.PlayControlElements>
        <audio ref={audioPlayer} autoPlay name="media" src={currentTrack.src} id="audio">
          <track kind="captions" />
        </audio>
        <S.PrevBtn />
        <S.PlayBtn isPlaying={isPlaying} onClick={onPlayBtn} disabled={currentTrack === {}} />
        <S.NextBtn />
        <S.CurrentTime></S.CurrentTime>
        <S.CurrentTime>{convertTime(currentTime)}</S.CurrentTime>
        <Scrubber progress={progress} />
        <S.Duration>{convertTime(currentTrack.duration)}</S.Duration>
        <TrackInfo />
      </S.PlayControlElements>
    </S.PlayControlContainer>
  );
};

export default PlayControl;
