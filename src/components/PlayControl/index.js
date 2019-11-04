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

  const findTrack = (el) => el.id === currentTrack.id;

  const onNextUp = (length, value, trackIndex) => {
    const index = currentPlaylist.findIndex(findTrack);
    if (index === length) {
      dispatch(playMusic());
      dispatch(setCurrentTrack(currentPlaylist[trackIndex]));
    } else {
      dispatch(playMusic());
      dispatch(setCurrentTrack(currentPlaylist[index + value]));
    }
  };

  return (
    <S.PlayControlContainer visible={isLoggedIn}>
      <S.PlayControlElements>
        <audio ref={audioPlayer} autoPlay={isPlaying} name="media" src={currentTrack.src} id="audio">
          <track kind="captions" />
        </audio>
        <S.PrevBtn onClick={() => onNextUp(0, -1, currentPlaylist.length - 1)} />
        <S.PlayBtn isPlaying={isPlaying} onClick={onPlayBtn} />
        <S.NextBtn onClick={() => onNextUp(currentPlaylist.length - 1, +1, 0)} />
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
