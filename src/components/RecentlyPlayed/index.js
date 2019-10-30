import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as S from './styled';

const RecentlyPlayed = () => {
  const listenedTracks = useSelector((state) => state.user.listenedTracks);
  const currentTrack = useSelector((state) => state.currentTrack);
  const isPlaying = useSelector((state) => state.isPlaying);
  const dispatch = useDispatch();
  const setCurrentPlaylist = () => {
    dispatch({ type: 'SET_CURRENT_PLAYLIST', payload: listenedTracks });
  };
  const setCurrentTrack = (track) => {
    dispatch({ type: 'SET_CURRENT_TRACK', payload: track });
  };
  const stopMusic = () => {
    dispatch({ type: 'STOP_MUSIC' });
  };
  const onPlay = (track) => {
    if (isPlaying) {
      stopMusic();
    } else if (!isPlaying) {
      setCurrentPlaylist();
      setCurrentTrack(track);
    }
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
      </S.RecentlyPlayedContainer>

    </S.Container>
  );
};

export default RecentlyPlayed;
