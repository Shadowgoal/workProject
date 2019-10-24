import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as S from './styled';

const LikedTracks = () => {
  const likedTracks = useSelector((state) => state.user.likedTracks);
  const dispatch = useDispatch();

  return (
    <S.MostPopularContainer>
      <S.LikedTracksLink>
        <S.IconContainer>
          <S.LikeIcon />
          <S.LikeCounter>{likedTracks.length} likes</S.LikeCounter>
        </S.IconContainer>
        <S.ViewAll>View All</S.ViewAll>
      </S.LikedTracksLink>
      <S.LikedTracksContainer>
        {
          likedTracks.map((track) => (
            <S.LikedTrack
              key={track.id}
              onClick={() => dispatch({ type: 'SET_CURRENT_TRACK', payload: track })}
            >
              <S.LikedTrackCover cover={track.cover} />
              <S.LikedTrackName>
                {track.artist}
                -
                {track.name}
              </S.LikedTrackName>
            </S.LikedTrack>
          )).reverse()
        }
      </S.LikedTracksContainer>
    </S.MostPopularContainer>
  );
};

export default LikedTracks;
