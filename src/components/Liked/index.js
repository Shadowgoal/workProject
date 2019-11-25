import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { useTranslation } from 'react-i18next';

import TracksLoading from 'components/TracksLoading';
import { actions as trackActions } from 'redux/tracks';
import { dislikeRequest, getLikedRequest, tracksRequest } from 'http/requests';
import { tracksSelector } from './helpers';

import * as S from './styled';

const Liked = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    currentTrack,
    isPlaying,
    likedTracks,
    username,
    isLoggedIn,
    likedTracksIds,
    tracks,
  } = useSelector(tracksSelector);

  const dispatch = useDispatch();

  const { t } = useTranslation();

  const { addToast } = useToasts();

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      if (!tracks.length) {
        const data = await tracksRequest();
        setIsLoading(false);
        dispatch(trackActions.setTracks(data.tracks));
      }
      if (isLoggedIn && !likedTracksIds.length) {
        const data = await getLikedRequest(username);
        setIsLoading(false);
        dispatch(trackActions.getLiked(data.likedTracksIds));
      }
      setIsLoading(false);
    }
    fetchData();
  }, [tracks, likedTracksIds, isLoggedIn, username, dispatch]);

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
        <TracksLoading isLoading={isLoading} />
      </S.LikedTracksContainer>

    </S.Container>
  );
};

export default Liked;
