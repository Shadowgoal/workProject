import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { useTranslation } from 'react-i18next';

import { actions as trackActions } from 'redux/tracks';
import { actions as likeActions } from 'redux/likes';
import { dislikeRequest } from 'http/requests';

import * as S from './styled';

const Liked = () => {
  const likedTracks = useSelector((state) => state.user.likedTracks);
  const currentTrack = useSelector((state) => state.currentTrack);
  const isPlaying = useSelector((state) => state.isPlaying);
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
    const data = await dislikeRequest(track);
    dispatch(likeActions.dislikeTrack(data.likedTracks));
    addToast(`${data.likedTracks.artist} - ${data.likedTracks.name} was removed from your liked list`,
      { appearance: 'info', autoDismiss: true });
  };

  return (
    <S.Container>
      {t('LibraryNavBar.Likes')}
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
