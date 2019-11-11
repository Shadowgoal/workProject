import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useToasts } from 'react-toast-notifications';

import {
  setCurrentTrack,
  clearCurrentPlaylist,
  likeTrack,
  unlikeTrack,
} from 'redux/action';
import { likeRequest, dislikeRequest } from 'http/requests';
import CloseIcon from 'assets/CloseIcon/closeicon.svg';

import * as S from './styled';

const TrackInfo = () => {
  const [isPlaylistsOpened, setIsPlaylistsOpened] = useState(false);

  const currentTrack = useSelector((state) => state.currentTrack);
  const currentPlaylist = useSelector((state) => state.currentPlaylist);
  const dispatch = useDispatch();

  const { addToast } = useToasts();

  const onLike = async (track) => {
    if (track.liked) {
      const data = await dislikeRequest(track);
      dispatch(unlikeTrack(data.likedTracks));
    } else {
      const data = await likeRequest(track);
      dispatch(likeTrack(data.likedTracks));
    }
    addToast(`${track.artist} - ${track.name} was ${track.liked ? 'added' : 'removed'} to your liked list`,
      { appearance: 'info', autoDismiss: true });
  };

  const onPlaylist = () => setIsPlaylistsOpened(!isPlaylistsOpened);

  return (
    <S.Container>
      <S.ImgContainer cover={currentTrack.cover} />
      <S.TrackName>
        {currentTrack.artist || 'Set'} - {currentTrack.name || 'Track'}
      </S.TrackName>
      <S.Like onClick={() => onLike(currentTrack)} liked={currentTrack.liked}>❤</S.Like>
      <S.Playlist onClick={onPlaylist} isPlaylistsOpened={isPlaylistsOpened}>♩☰</S.Playlist>
      <S.PlaylistModal isPlaylistsOpened={isPlaylistsOpened}>
        <S.NextUpContainer>
          <S.NextUpTitle>Next Up</S.NextUpTitle>
          <S.BtnContainer>
            <S.ClearBtn onClick={() => dispatch(clearCurrentPlaylist())}>Clear</S.ClearBtn>
            <S.ClosePlaylists onClick={onPlaylist} src={CloseIcon}></S.ClosePlaylists>
          </S.BtnContainer>
        </S.NextUpContainer>
        <S.PlaylistContainer>
          {
            currentPlaylist.map((track) => (
              <S.TrackContainer key={track.id} onClick={() => dispatch(setCurrentTrack(track))}>
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
