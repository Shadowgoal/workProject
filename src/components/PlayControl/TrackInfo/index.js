import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import instance from 'http/index';

import * as S from './styled';

const TrackInfo = () => {
  const currentTrack = useSelector((state) => state.currentTrack);
  const liked = useSelector((state) => state.currentTrack.liked);
  const dispatch = useDispatch();
  const likeTrack = useCallback(
    (track) => dispatch({ type: 'LIKE_TRACK', likedTracks: track }),
    [dispatch],
  );
  const unlikeTrack = useCallback(
    () => dispatch({ type: 'UNLIKE_TRACK' }),
    [dispatch],
  );
  const onLike = async () => {
    if (liked) {
      const data = await instance.put('/disliketrack', currentTrack).then((response) => response.data);
      unlikeTrack(data.likedTracks.id);
    } else {
      const data = await instance.put('/liketrack', currentTrack).then((response) => response.data);
      likeTrack(data.likedTracks);
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
