import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import TracksLoading from 'components/TracksLoading';
import { tracksRequest } from 'http/requests';
import { actions as tracksActions } from 'redux/tracks';

import * as S from './styled';

const Weekly = () => {
  const [isLoading, setIsLoading] = useState(false);

  const currentTrack = useSelector((state) => state.tracks.currentTrack);
  const currentPlaylist = useSelector((state) => state.tracks.currentPlaylist);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const onTrack = (track) => dispatch(tracksActions.setCurrentTrack(track));

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const data = await tracksRequest();
      if (!currentPlaylist.length) {
        dispatch(tracksActions.setCurrentPlaylist(data.tracks));
      }
      setIsLoading(false);
    }
    fetchData();
  }, [currentPlaylist, dispatch]);

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>{t('Weekly.Title')}</S.Title>
        <S.TitleText>{t('Weekly.Description')}</S.TitleText>
      </S.TitleContainer>
      <S.SelectionPlaylistContainer>
        <S.CoverContainer src={currentTrack.cover} />
        <S.TrackContainer>
          <TracksLoading isLoading={isLoading} />
          {
            currentPlaylist.map((track) => (
              <S.Track
                key={track.id}
                onClick={() => onTrack(track)}
              >
                <S.TrackArtist>
                  {track.artist}
                </S.TrackArtist>
                -
                <S.TrackName>
                  {track.name}
                </S.TrackName>
              </S.Track>
            ))
          }
        </S.TrackContainer>
      </S.SelectionPlaylistContainer>
    </S.Container>
  );
};

export default Weekly;
