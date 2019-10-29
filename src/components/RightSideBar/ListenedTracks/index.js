import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import * as S from './styled';

const ListenedTracks = () => {
  const listenedTracks = useSelector((state) => state.user.listenedTracks);
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <S.MostPopularContainer>
      <S.ListenedTracksLink onClick={() => history.push('/you/library')}>
        <S.IconContainer>
          <S.CalendarIcon />
          <S.ListenedHistory>Listening History</S.ListenedHistory>
        </S.IconContainer>
        <S.ViewAll>View All</S.ViewAll>
      </S.ListenedTracksLink>
      <S.ListenedTracksContainer>
        {
          listenedTracks.map((track) => (
            <S.ListenedTrack
              key={track.id}
              onClick={() => dispatch({ type: 'SET_CURRENT_TRACK', payload: track })}
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
