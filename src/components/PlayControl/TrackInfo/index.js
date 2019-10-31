import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useToasts } from 'react-toast-notifications';

import instance from 'http/index';
import CloseIcon from 'assets/CloseIcon/closeicon.svg';

import * as S from './styled';

const TrackInfo = () => {
  const [isPlaylistsOpened, setIsPlaylistsOpened] = useState(false);
  const currentTrack = useSelector((state) => state.currentTrack);
  const currentPlaylist = useSelector((state) => state.currentPlaylist);
  const dispatch = useDispatch();
  const { addToast } = useToasts();
  const setCurrentTrack = (track) => dispatch({ type: 'SET_CURRENT_TRACK', payload: track });
  const clearCurrentPlaylist = () => dispatch({ type: 'CLEAR_CURRENT_PLAYLIST' });
  const likeTrack = useCallback(
    (track) => dispatch({ type: 'LIKE_TRACK', likedTracks: track }),
    [dispatch],
  );
  const unlikeTrack = useCallback(
    (track) => dispatch({ type: 'UNLIKE_TRACK', likedTracks: track }),
    [dispatch],
  );
  const onLike = async (track) => {
    if (track.liked) {
      const data = await instance.put('/disliketrack', track).then((response) => response.data);
      unlikeTrack(data.likedTracks);
      addToast(`${data.likedTracks.artist} - ${data.likedTracks.name} was removed from your liked list`,
        { appearance: 'info', autoDismiss: true });
    } else if (!track.liked) {
      const data = await instance.put('/liketrack', track).then((response) => response.data);
      likeTrack(data.likedTracks);
      addToast(`${data.likedTracks.artist} - ${data.likedTracks.name} was added to your liked list`,
        { appearance: 'info', autoDismiss: true });
    }
  };
  const onPlaylist = () => {
    if (isPlaylistsOpened) {
      setIsPlaylistsOpened(false);
    } else if (!isPlaylistsOpened) {
      setIsPlaylistsOpened(true);
    }
  };

  return (
    <S.Container>
      <S.ImgContainer cover={currentTrack.cover} />
      <S.TrackName>
        {currentTrack.artist} - {currentTrack.name}
      </S.TrackName>
      <S.Like onClick={() => onLike(currentTrack)} liked={currentTrack.liked}>❤</S.Like>
      <S.Playlist onClick={onPlaylist} isPlaylistsOpened={isPlaylistsOpened}>♩☰</S.Playlist>
      <S.PlaylistModal isPlaylistsOpened={isPlaylistsOpened}>
        <S.NextUpContainer>
          <S.NextUpTitle>Next Up</S.NextUpTitle>
          <S.BtnContainer>
            <S.ClearBtn onClick={clearCurrentPlaylist}>Clear</S.ClearBtn>
            <S.ClosePlaylists onClick={onPlaylist} src={CloseIcon}></S.ClosePlaylists>
          </S.BtnContainer>
        </S.NextUpContainer>
        <S.PlaylistContainer>
          {
            currentPlaylist.map((track) => (
              <S.TrackContainer key={track.id} onClick={() => setCurrentTrack(track)}>
                <S.ImgContainer cover={track.cover} />
                <S.TrackName>
                  {track.artist} - {track.name}
                </S.TrackName>
                <S.Like onClick={() => onLike(track)} liked={track.liked}>❤</S.Like>
              </S.TrackContainer>
            ))
          }
        </S.PlaylistContainer>
      </S.PlaylistModal>
    </S.Container>
  );
};

export default TrackInfo;
