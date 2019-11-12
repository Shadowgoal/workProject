import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { actions as tracksActions } from 'redux/tracks';

import * as S from './styled';

const LikedTracks = () => {
  const likedTracks = useSelector((state) => state.user.likedTracks);
  const dispatch = useDispatch();

  const count = likedTracks.length;

  const { t } = useTranslation();

  return (
    <S.MostPopularContainer>
      <S.LikedTracksLink to="/you/likes">
        <S.IconContainer>
          <S.LikeIcon />
          <S.LikeCounter>{t('Liked.Likes', { count })}</S.LikeCounter>
        </S.IconContainer>
        <S.ViewAll>{t('Liked.View all')}</S.ViewAll>
      </S.LikedTracksLink>
      <S.LikedTracksContainer>
        {
          likedTracks.map((track) => (
            <S.LikedTrack
              key={track.id}
              onClick={() => dispatch(tracksActions.setCurrentTrack(track))}
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
