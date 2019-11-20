import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { useTranslation } from 'react-i18next';

import { actions as trackActions } from 'redux/tracks';
import { dislikeRequest, getLikedRequest } from 'http/requests';
import { tracksSelector } from './helpers';

import * as S from './styled';

const Liked = () => {
  const {
    currentTrack,
    isPlaying,
    likedTracks,
    username,
  } = useSelector(tracksSelector);

  const dispatch = useDispatch();

  const { t } = useTranslation();

  const { addToast } = useToasts();

  const onPlay = (track) => {
    if (isPlaying && track.id === currentTrack.id) {
      dispatch(trackActions.pauseMusic());
    } else {
      dispatch(trackActions.setCurrentPlaylist(likedTracks));
      dispatch(trackActions.setCurrentTrack(track));
      dispatch(trackActions.playMusic());
    }
  };

  const onLike = async (track) => {
    const requestData = {
      track,
      username,
    };
    await dislikeRequest(requestData);
    const data = await getLikedRequest(username);
    addToast(`${track.artist} - ${track.name} ${t('LikeToast.Removed')}`,
      { appearance: 'info', autoDismiss: true });
    dispatch(trackActions.dislikeTrack(data.likedTracksIds));
  };

  return (
    <S.Container>
      {t('LibraryNavBar.Likes')}
      {!likedTracks.length && <S.LikedTracksEmpty>{t('NoLiked')}</S.LikedTracksEmpty> }
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
