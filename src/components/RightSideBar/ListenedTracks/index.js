import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCurrentTrack } from 'redux/action';

import * as S from './styled';

const ListenedTracks = () => {
  const listenedTracks = useSelector((state) => state.user.listenedTracks);
  const dispatch = useDispatch();

  return (
    <S.MostPopularContainer>
      <S.ListenedTracksLink to="/you/library">
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
              onClick={() => dispatch(setCurrentTrack(track))}
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
