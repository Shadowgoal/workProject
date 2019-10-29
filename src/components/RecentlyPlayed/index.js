import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as S from './styled';

const RecentlyPlayed = () => {
  const listenedTracks = useSelector((state) => state.user.listenedTracks);
  const dispatch = useDispatch();
  const setCurrentPlaylist = (track) => {
    dispatch({ type: 'SET_CURRENT_PLAYLIST', payload: listenedTracks });
    dispatch({ type: 'SET_CURRENT_TRACK', payload: track });
  };
  return (
    <S.Container>
      RecentlyPlayed
      <S.RecentlyPlayedContainer>
        {
          listenedTracks.map((track) => (
            <S.TrackContainer key={track.id}>
              <S.CoverContainer cover={track.cover}>
                <S.Shadow>
                  <S.Play onClick={() => setCurrentPlaylist(track)}>
                    <S.PlayImg />
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
