import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCurrentTrack, playMusic, stopMusic } from 'redux/action';

import Scrubber from './Scrubber';
import VolumeSlider from './VolumeSlider';
import TrackInfo from './TrackInfo';

import * as S from './styled';

const PlayControl = () => {
  const [rangeValue, setRangeValue] = useState('0.3');
  const isPlaying = useSelector((state) => state.isPlaying);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const currentTrack = useSelector((state) => state.currentTrack);
  const currentPlaylist = useSelector((state) => state.currentPlaylist);
  const dispatch = useDispatch();

  const audioPlayer = useRef(null);

  const updateRange = (value) => {
    setRangeValue(value);
    audioPlayer.current.volume = rangeValue;
  };

  const onPlayBtn = () => {
    if (!isPlaying) {
      dispatch(playMusic());
      audioPlayer.current.play();
    } else if (isPlaying) {
      dispatch(stopMusic());
      audioPlayer.current.pause();
    }
  };

  const onNextUp = () => {
    for (let i = 0; i < currentPlaylist.length; i += 1) {
      if (currentPlaylist.length - 1 === i) {
        dispatch(playMusic());
        dispatch(setCurrentTrack(currentPlaylist[0]));
        break;
      } else if (currentPlaylist[i].id === currentTrack.id) {
        dispatch(playMusic());
        dispatch(setCurrentTrack(currentPlaylist[i + 1]));
        break;
      }
    }
  };

  const onPreviusUp = () => {
    for (let i = currentPlaylist.length - 1; i >= 0; i -= 1) {
      if (i === 0) {
        dispatch(setCurrentTrack(currentPlaylist[currentPlaylist.length - 1]));
        playMusic();
        break;
      } else if (currentPlaylist[i].id === currentTrack.id) {
        dispatch(playMusic());
        setCurrentTrack(currentPlaylist[i - 1]);
        break;
      }
    }
  };

  return (
    <S.PlayControlContainer visible={isLoggedIn}>
      <S.PlayControlElements>
        <audio ref={audioPlayer} autoPlay={isPlaying} name="media" src={currentTrack.src} id="audio">
          <track kind="captions" />
        </audio>
        <S.PrevBtn onClick={onPreviusUp} />
        <S.PlayBtn isPlaying={isPlaying} onClick={onPlayBtn} />
        <S.NextBtn onClick={onNextUp} />
        <Scrubber
          onPlayBtn={onPlayBtn}
          audioPlayer={audioPlayer}
          onNextUp={onNextUp}
        />
        <VolumeSlider updateRange={updateRange} rangeValue={rangeValue} />
        <TrackInfo />
      </S.PlayControlElements>
    </S.PlayControlContainer>
  );
};

export default PlayControl;
