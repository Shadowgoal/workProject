import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import instance from 'http/index';

import * as S from './styled';

const Liked = () => {
  const likedTracks = useSelector((state) => state.user.likedTracks);
  const currentTrack = useSelector((state) => state.currentTrack);
  const dispatch = useDispatch();
  const setCurrentPlaylist = (track) => {
    dispatch({ type: 'SET_CURRENT_PLAYLIST', payload: likedTracks });
    dispatch({ type: 'SET_CURRENT_TRACK', payload: track });
  };
  const unlikeTrack = useCallback(
    (track) => dispatch({ type: 'UNLIKE_TRACK', likedTracks: track }),
    [dispatch],
  );

  const onLike = async (track) => {
    const data = await instance.put('/disliketrack', track).then((response) => response.data);
    unlikeTrack(data.likedTracks.id);
  };
  return (
    <S.Container>
      Likes
      <S.LikedTracksContainer>
        {
          likedTracks.map((track) => (
            <S.TrackContainer key={track.id}>
              <S.CoverContainer cover={track.cover}>
                <S.Shadow>
                  <S.Blank />
                  <S.Play onClick={() => setCurrentPlaylist(track)}>
                    <S.PlayImg icon={currentTrack.id === track.id} />
                  </S.Play>
                  <S.Like onClick={() => onLike(track)}>❤</S.Like>
                </S.Shadow>
              </S.CoverContainer>
              <S.TrackArtist>{track.artist}</S.TrackArtist>
              <S.TrackName>{track.name}</S.TrackName>
            </S.TrackContainer>
          ))
        }
      </S.LikedTracksContainer>

    </S.Container>
  );
};

export default Liked;
