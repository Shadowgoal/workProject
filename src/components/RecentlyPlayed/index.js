import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { actions as tracksActions } from 'redux/tracks';
import { recentlyPlayedSelector } from './helpers';

import * as S from './styled';

const RecentlyPlayed = () => {
  const {
    currentTrack,
    listenedTracks,
    isPlaying,
  } = useSelector(recentlyPlayedSelector);
  const dispatch = useDispatch();

  const { t } = useTranslation();

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
          ))
        }
      </S.RecentlyPlayedContainer>

    </S.Container>
  );
};

export default RecentlyPlayed;
