import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Scrubber from './Scrubber';
import VolumeSlider from './VolumeSlider';
import TrackInfo from './TrackInfo';

import * as S from './styled';

const PlayControl = () => {
  const [rangeValue, setRangeValue] = useState('0.3');
  const [isPlaying, setIsPlaying] = useState(null);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const currentTrack = useSelector((state) => state.currentTrack);
  const currentPlaylist = useSelector((state) => state.currentPlaylist);
  const dispatch = useDispatch();
  const setCurrentTrack = (track) => dispatch({ type: 'SET_CURRENT_TRACK', payload: track });
  const audioPlayer = useRef(null);

  const updateRange = (value) => {
    setRangeValue(value);
    audioPlayer.current.volume = rangeValue;
  };

  const onPlayBtn = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      audioPlayer.current.play();
    } else if (isPlaying) {
      setIsPlaying(false);
      audioPlayer.current.pause();
    }
  };

  const onNextUp = () => {
    for (let i = 0; i <= currentPlaylist.length; i += 1) {
      if (currentPlaylist.length - 1 === i) {
        setIsPlaying(true);
        setCurrentTrack(currentPlaylist[0]);
        break;
      } else if (currentPlaylist[i].id === currentTrack.id) {
        setIsPlaying(true);
        setCurrentTrack(currentPlaylist[i + 1]);
        break;
      }
    }
  };

  const onPreviusUp = () => {
    for (let i = currentPlaylist.length - 1; i >= 0; i -= 1) {
      if (i === 0) {
        setCurrentTrack(currentPlaylist[currentPlaylist.length - 1]);
        setIsPlaying(true);
        break;
      } else if (currentPlaylist[i].id === currentTrack.id) {
        setIsPlaying(true);
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
        <Scrubber
          onPlayBtn={onPlayBtn}
          audioPlayer={audioPlayer}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
        <VolumeSlider updateRange={updateRange} rangeValue={rangeValue} />
        <TrackInfo />
      </S.PlayControlElements>
    </S.PlayControlContainer>
  );
};

export default PlayControl;
