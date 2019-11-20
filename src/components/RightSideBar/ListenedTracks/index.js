import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import TracksLoading from 'components/TracksLoading';
import { getListenedRequest } from 'http/requests';
import { actions as tracksActions } from 'redux/tracks';
import { tracksSelector } from './helpers';

import * as S from './styled';

const ListenedTracks = () => {
  const [isLoading, setIsLoading] = useState(true);

  const { listenedTracks, username, isLoggedIn } = useSelector(tracksSelector);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  useEffect(() => {
    async function fetchData() {
      if (isLoggedIn && !listenedTracks.length) {
        setIsLoading(true);
        const data = await getListenedRequest(username);
        dispatch(tracksActions.getListened(data.listenedTracksIds));
      }
      setIsLoading(false);
    }
    fetchData();
  }, [dispatch, username, listenedTracks, isLoggedIn]);

  return (
    <S.MostPopularContainer>
      <S.ListenedTracksLink to="/you/library">
        <S.IconContainer>
          <S.CalendarIcon />
          <S.ListenedHistory>{t('Listened.History')}</S.ListenedHistory>
        </S.IconContainer>
        <S.ViewAll>{t('Listened.View all')}</S.ViewAll>
      </S.ListenedTracksLink>
      <TracksLoading isLoading={isLoading} />
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
