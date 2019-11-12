import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { actions as tracksActions } from 'redux/tracks';

import * as S from './styled';

const ListenedTracks = () => {
  const listenedTracks = useSelector((state) => state.user.listenedTracks);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  return (
    <S.MostPopularContainer>
      <S.ListenedTracksLink to="/you/library">
        <S.IconContainer>
          <S.CalendarIcon />
          <S.ListenedHistory>{t('Listened.History')}</S.ListenedHistory>
        </S.IconContainer>
        <S.ViewAll>{t('Listened.View all')}</S.ViewAll>
      </S.ListenedTracksLink>
      <S.ListenedTracksContainer>
        {
          listenedTracks.map((track) => (
            <S.ListenedTrack
              key={track.id}
              onClick={() => dispatch(tracksActions.setCurrentTrack(track))}
            >
              <S.ListenedTrackCover cover={track.cover} />
              <S.ListenedTrackName>
                {track.artist}
                -
                {track.name}
              </S.ListenedTrackName>
            </S.ListenedTrack>
          )).reverse()
        }
      </S.ListenedTracksContainer>
    </S.MostPopularContainer>
  );
};

export default ListenedTracks;
