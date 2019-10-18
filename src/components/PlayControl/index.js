import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import * as S from './styled';

const PlayControl = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [isPlaying, setIsPlaying] = useState(false);
  const onPlayBtn = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
  };
  return (
    <S.PlayControlContainer visible={isLoggedIn}>
      <S.PlayControlElements>
        <audio ref={(ref) => ref}>
          <source src="music/Atl-Serpantin.mp3" />
          <track kind="captions" />
        </audio>
        <S.PrevBtn />
        <S.PlayBtn isPlaying={isPlaying} onClick={onPlayBtn} />
        <S.NextBtn />
      </S.PlayControlElements>
    </S.PlayControlContainer>
  );
};

export default PlayControl;
