import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Scrubber from './Scrubber';

import * as S from './styled';

const PlayControl = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const currentTrack = useSelector((state) => state.currentTrack);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioPlayer = document.getElementById('audio');

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
  const updateScrubber = (percent) => {
    const width = percent;
    return width;
  };
  const onPlayBtn = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      audioPlayer.play();
      setInterval(() => {
        const current = audioPlayer.currentTime;
        const dur = currentTrack.duration;
        const percent = `${(current / dur) * 100}%`;
        console.log(percent);
        updateScrubber(percent);
      }, 1000);
    } else {
      setIsPlaying(false);
      audioPlayer.pause();
    }
  };

  return (
    <S.PlayControlContainer visible={isLoggedIn}>
      <S.PlayControlElements>
        <audio autoPlay name="media" id="audio">
          <source src={currentTrack.src} type="audio/mp3" />
          <track kind="captions" />
        </audio>
        <S.PrevBtn />
        <S.PlayBtn isPlaying={isPlaying} onClick={onPlayBtn} />
        <S.NextBtn />
        <S.CurrentTime></S.CurrentTime>
        <S.CurrentTime>0:00</S.CurrentTime>
        <Scrubber updateScrubber={updateScrubber} />
        <S.Duration>{convertTime(currentTrack.duration)}</S.Duration>
      </S.PlayControlElements>
    </S.PlayControlContainer>
  );
};

export default PlayControl;
