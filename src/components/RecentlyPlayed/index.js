import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import TracksLoading from 'components/TracksLoading';
import { getListenedRequest } from 'http/requests';
import { actions as tracksActions } from 'redux/tracks';
import { recentlyPlayedSelector } from './helpers';

import * as S from './styled';

const RecentlyPlayed = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    currentTrack,
    listenedTracks,
    isPlaying,
    username,
    isLoggedIn,
    listenedTracksIds,
  } = useSelector(recentlyPlayedSelector);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      if (isLoggedIn && !listenedTracksIds.length) {
        const data = await getListenedRequest(username);
        setIsLoading(false);
        dispatch(tracksActions.getListened(data.listenedTracksIds));
      }
      setIsLoading(false);
    }
    fetchData();
  }, [dispatch, username, listenedTracksIds, isLoggedIn]);

  const onPlay = (track) => {
    if (isPlaying && track.id === currentTrack.id) {
      dispatch(tracksActions.pauseMusic());
    } else {
      dispatch(tracksActions.setCurrentPlaylist(listenedTracks));
      dispatch(tracksActions.setCurrentTrack(track));
      dispatch(tracksActions.playMusic());
    }
  };

  return (
    <S.Container>
      {t('LibraryNavBar.RecentlyPlayed')}
      {!listenedTracks.length
      && <S.ListenedTracksEmpty>{t('NoListened')}</S.ListenedTracksEmpty>}
      <S.RecentlyPlayedContainer>
        {
          listenedTracks.map((track) => (
            <S.TrackContainer key={track.id}>
              <S.CoverContainer cover={track.cover}>
                <S.Shadow>
                  <S.Play onClick={() => onPlay(track)}>
                    <S.PlayImg icon={currentTrack.id === track.id && isPlaying} />
                  </S.Play>
                </S.Shadow>
              </S.CoverContainer>
              <S.TrackArtist>{track.artist}</S.TrackArtist>
              <S.TrackName>{track.name}</S.TrackName>
            </S.TrackContainer>
          )).reverse()
        }
        <TracksLoading isLoading={isLoading} />
      </S.RecentlyPlayedContainer>
    </S.Container>
  );
};

export default RecentlyPlayed;
