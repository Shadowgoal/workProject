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
  const currentPlaylist = useSelector((state) => state.currentPlaylist);
  const dispatch = useDispatch();
  const playMusic = () => { dispatch({ type: 'PLAY_MUSIC' }); };
  const pauseMusic = () => { dispatch({ type: 'PAUSE_MUSIC' }); };
  const setCurrentTrack = (track) => dispatch({ type: 'SET_CURRENT_TRACK', payload: track });
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

  const onNextUp = () => {
    for (let i = 0; i <= currentPlaylist.length; i += 1) {
      if (currentPlaylist.length - 1 === i) {
        setCurrentTrack(currentPlaylist[0]);
        break;
      } else if (currentPlaylist[i].id === currentTrack.id) {
        setCurrentTrack(currentPlaylist[i + 1]);
        break;
      }
    }
  };

  const onPreviusUp = () => {
    for (let i = currentPlaylist.length - 1; i >= 0; i -= 1) {
      if (i === 0) {
        setCurrentTrack(currentPlaylist[currentPlaylist.length - 1]);
        break;
      } else if (currentPlaylist[i].id === currentTrack.id) {
        setCurrentTrack(currentPlaylist[i - 1]);
        break;
      }
    }
  };

  return (
    <S.PlayControlContainer visible={isLoggedIn}>
      <S.PlayControlElements>
        <audio ref={audioPlayer} autoPlay name="media" src={currentTrack.src} id="audio">
          <track kind="captions" />
        </audio>
        <S.PrevBtn onClick={onPreviusUp} />
        <S.PlayBtn isPlaying={isPlaying} onClick={onPlayBtn} disabled={currentTrack === {}} />
        <S.NextBtn onClick={onNextUp} />
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
