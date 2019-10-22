import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as S from './styled';

const TrackInfo = () => {
  const currentTrack = useSelector((state) => state.currentTrack);
  const liked = useSelector((state) => state.currentTrack.liked);
  const dispatch = useDispatch();
  const likeTrack = useCallback(
    () => dispatch({ type: 'LIKE_TRACK' }),
    [dispatch],
  );
  const unlikeTrack = useCallback(
    () => dispatch({ type: 'UNLIKE_TRACK' }),
    [dispatch],
  );
  const onLike = () => {
    if (liked) {
      unlikeTrack();
    } else {
      likeTrack();
    }
  };
  return (
    <S.Container>
      <S.ImgContainer cover={currentTrack.cover} />
      <S.TrackName>
        {currentTrack.artist} - {currentTrack.name}
      </S.TrackName>
      <S.Like onClick={onLike} liked={liked}>❤</S.Like>
    </S.Container>
  );
};

export default TrackInfo;
