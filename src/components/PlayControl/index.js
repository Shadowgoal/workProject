import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Scrubber from './Scrubber';
import VolumeSlider from './VolumeSlider';
import TrackInfo from './TrackInfo';

import * as S from './styled';

const PlayControl = () => {
  // const [currentTime, setCurrentTime] = useState(0);
  // const [progress, setCurrentProgress] = useState(0);
  const [rangeValue, setRangeValue] = useState('0.3');
  // const [scrubberInterval, setScrubberInterval] = useState(null);
  const [isPlaying, setIsPlaying] = useState(null);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const currentTrack = useSelector((state) => state.currentTrack);
  const currentPlaylist = useSelector((state) => state.currentPlaylist);
  const dispatch = useDispatch();
  const setCurrentTrack = (track) => dispatch({ type: 'SET_CURRENT_TRACK', payload: track });
  const audioPlayer = useRef(null);

  // const convertTime = (timestamp) => {
  //   if (!timestamp) {
  //     return '0:00';
  //   }
  //   const minutes = Math.floor(timestamp / 60);
  //   let seconds = timestamp - (minutes * 60);
  //   if (seconds < 10) {
  //     seconds = `0${seconds}`;
  //   }
  //   const time = `${minutes}:${seconds}`;
  //   return time;
  // };

  // const updateTime = (timestamp) => {
  //   const time = Math.floor(timestamp);
  //   setCurrentTime(time);
  // };

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

  // useEffect(() => {
  //   if (currentTrack && !isPlaying) {
  //     onPlayBtn(true);
  //     setIsPlaying(true);
  //   }
  //   if (!scrubberInterval) {
  //     const intervalId = setInterval(() => {
  //       const current = audioPlayer.current.currentTime;
  //       const dur = audioPlayer.current.duration;
  //       const percent = (current / dur) * 100;
  //       setCurrentProgress(percent);
  //       updateTime(current);
  //     }, 1000);
  //     setScrubberInterval(intervalId);
  //   }

  //   return function cleanup() {
  //     clearInterval(scrubberInterval);
  //     if (scrubberInterval) {
  //       setScrubberInterval(null);
  //     }
  //   };
  // }, [scrubberInterval]);

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
        {/* <S.CurrentTime>{convertTime(currentTime)}</S.CurrentTime> */}
        <Scrubber onPlayBtn={onPlayBtn} audioPlayer={audioPlayer} />
        {/* <S.Duration>{convertTime(currentTrack.duration)}</S.Duration> */}
        <VolumeSlider updateRange={updateRange} rangeValue={rangeValue} />
        <TrackInfo />
      </S.PlayControlElements>
    </S.PlayControlContainer>
  );
};

export default PlayControl;
