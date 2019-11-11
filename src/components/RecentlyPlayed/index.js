import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import {
  setCurrentPlaylist, setCurrentTrack, stopMusic, playMusic,
} from 'redux/action';

import * as S from './styled';

const RecentlyPlayed = () => {
  const listenedTracks = useSelector((state) => state.user.listenedTracks);
  const currentTrack = useSelector((state) => state.currentTrack);
  const isPlaying = useSelector((state) => state.isPlaying);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const onPlay = (track) => {
    if (isPlaying && track.id === currentTrack.id) {
      dispatch(stopMusic());
    } else {
      dispatch(setCurrentPlaylist(listenedTracks));
      dispatch(setCurrentTrack(track));
      dispatch(playMusic());
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
