import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { actions as tracksActions } from 'redux/tracks';
import { playControlSelector } from './helpers';

import Scrubber from './Scrubber';
import VolumeSlider from './VolumeSlider';
import TrackInfo from './TrackInfo';

import * as S from './styled';

const PlayControl = () => {
  const [rangeValue, setRangeValue] = useState('0.3');
  const {
    currentTrack,
    currentPlaylist,
    isPlaying,
    isLoggedIn,
  } = useSelector(playControlSelector);

  const dispatch = useDispatch();

  const audioPlayer = useRef(null);

  const updateRange = (value) => {
    setRangeValue(value);
    audioPlayer.current.volume = value;
  };

  const onPlayBtn = () => {
    if (!isPlaying) {
      dispatch(tracksActions.playMusic());
      audioPlayer.current.play();
    } else if (isPlaying) {
      dispatch(tracksActions.pauseMusic());
      audioPlayer.current.pause();
    }
  };

  const findTrack = (el) => el.id === currentTrack.id;

  const onNextUp = (length, value, trackIndex) => {
    const index = currentPlaylist.findIndex(findTrack);
    if (index === length) {
      dispatch(tracksActions.playMusic());
      dispatch(tracksActions.setCurrentTrack(currentPlaylist[trackIndex]));
    } else {
      dispatch(tracksActions.playMusic());
      dispatch(tracksActions.setCurrentTrack(currentPlaylist[index + value]));
    }
  };

  return (
    <S.PlayControlContainer visible={isLoggedIn}>
      <S.PlayControlElements>
        <audio ref={audioPlayer} autoPlay={isPlaying} name="media" src={currentTrack.src} id="audio">
          <track kind="captions" />
        </audio>
        <S.PrevBtn
          onClick={() => onNextUp(0, -1, currentPlaylist.length - 1)}
          disabled={!currentPlaylist.length}
        />
        <S.PlayBtn isPlaying={isPlaying} onClick={() => onPlayBtn()} />
        <S.NextBtn
          onClick={() => onNextUp(currentPlaylist.length - 1, +1, 0)}
          disabled={!currentPlaylist.length}
        />
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
