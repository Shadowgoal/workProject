import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';

import instance from 'http/index';

import * as S from './styled';

const Liked = () => {
  const likedTracks = useSelector((state) => state.user.likedTracks);
  const currentTrack = useSelector((state) => state.currentTrack);
  const isPlaying = useSelector((state) => state.isPlaying);
  const dispatch = useDispatch();
  const { addToast } = useToasts();
  const setCurrentPlaylist = () => {
    dispatch({ type: 'SET_CURRENT_PLAYLIST', payload: likedTracks });
  };
  const setCurrentTrack = (track) => {
    dispatch({ type: 'SET_CURRENT_TRACK', payload: track });
  };
  const stopMusic = () => {
    dispatch({ type: 'STOP_MUSIC' });
  };
  const playMusic = () => {
    dispatch({ type: 'PLAY_MUSIC' });
  };
  const onPlay = (track) => {
    if (isPlaying && track.id === currentTrack.id) {
      stopMusic();
    } else if (isPlaying && track.id !== currentTrack.id) {
      setCurrentPlaylist();
      setCurrentTrack(track);
      playMusic();
    } else if (!isPlaying) {
      setCurrentPlaylist();
      setCurrentTrack(track);
      playMusic();
    }
  };
  const unlikeTrack = useCallback(
    (track) => dispatch({ type: 'UNLIKE_TRACK', likedTracks: track }),
    [dispatch],
  );

  const onLike = async (track) => {
    const data = await instance.put('/disliketrack', track).then((response) => response.data);
    unlikeTrack(data.likedTracks);
    addToast(`${data.likedTracks.artist} - ${data.likedTracks.name} was removed from your liked list`,
      { appearance: 'info', autoDismiss: true });
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
                  <S.Play onClick={() => onPlay(track)}>
                    <S.PlayImg icon={currentTrack.id === track.id && isPlaying} />
                  </S.Play>
                  <S.Like onClick={() => onLike(track)}>❤</S.Like>
                </S.Shadow>
              </S.CoverContainer>
              <S.TrackArtist>{track.artist}</S.TrackArtist>
              <S.TrackName>{track.name}</S.TrackName>
            </S.TrackContainer>
          )).reverse()
        }
      </S.LikedTracksContainer>

    </S.Container>
  );
};

export default Liked;
