import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { useTranslation } from 'react-i18next';

import { actions as tracksActions } from 'redux/tracks';
import { actions as likeActions } from 'redux/auth';
import { likeRequest, dislikeRequest } from 'http/requests';
import CloseIcon from 'assets/CloseIcon/closeicon.svg';
import { trackInfoSelector } from './helpers';

import * as S from './styled';

const TrackInfo = () => {
  const [isPlaylistsOpened, setIsPlaylistsOpened] = useState(false);

  const { currentTrack, currentPlaylist, likedTracksIds } = useSelector(trackInfoSelector);

  const dispatch = useDispatch();

  const { addToast } = useToasts();

  const { t } = useTranslation();

  const isLiked = (track) => (likedTracksIds.includes(track.id));

  const onLike = async (track) => {
    if (isLiked(track)) {
      const data = await dislikeRequest(track);
      dispatch(likeActions.dislikeTrack(data.likedTracks));
    } else {
      const data = await likeRequest(track);
      dispatch(likeActions.likeTrack(data.likedTracks));
    }
    addToast(`${track.artist} - ${track.name} 
      ${isLiked(track) ? t('LikeToast.Removed') : t('LikeToast.Added')}`,
    { appearance: 'info', autoDismiss: true });
  };

  const onPlaylist = () => setIsPlaylistsOpened(!isPlaylistsOpened);

  return (
    <S.Container>
      <S.ImgContainer cover={currentTrack.cover} />
      <S.TrackName>
        {currentTrack.artist} - {currentTrack.name}
      </S.TrackName>
      <S.Like onClick={() => onLike(currentTrack)} liked={isLiked(currentTrack)}>❤</S.Like>
      <S.Playlist onClick={onPlaylist} isPlaylistsOpened={isPlaylistsOpened}>♩☰</S.Playlist>
      <S.PlaylistModal isPlaylistsOpened={isPlaylistsOpened}>
        <S.NextUpContainer>
          <S.NextUpTitle>{t('Playlist.Next')}</S.NextUpTitle>
          <S.BtnContainer>
            <S.ClearBtn
              onClick={() => dispatch(tracksActions.clearCurrentPlaylist())}
            >
              {t('Playlist.Clear')}
            </S.ClearBtn>
            <S.ClosePlaylists onClick={onPlaylist} src={CloseIcon}></S.ClosePlaylists>
          </S.BtnContainer>
        </S.NextUpContainer>
        <S.PlaylistContainer>
          {
            currentPlaylist.map((track) => (
              <S.TrackContainer key={track.id} onClick={() => dispatch(tracksActions.setCurrentTrack(track))}>
                <S.ImgContainer cover={track.cover} />
                <S.TrackName>
                  {track.artist} - {track.name}
                </S.TrackName>
                <S.Like onClick={() => onLike(track)} liked={isLiked(track)}>❤</S.Like>
              </S.TrackContainer>
            ))
          }
        </S.PlaylistContainer>
      </S.PlaylistModal>
    </S.Container>
  );
};

export default TrackInfo;
