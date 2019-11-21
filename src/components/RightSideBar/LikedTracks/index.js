import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import TracksLoading from 'components/TracksLoading';
import { getLikedRequest } from 'http/requests';
import { actions as tracksActions } from 'redux/tracks';
import { likedSelector } from './helpers';

import * as S from './styled';

const LikedTracks = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    likedTracks,
    username,
    isLoggedIn,
    likedTracksIds,
  } = useSelector(likedSelector);
  const dispatch = useDispatch();

  const count = likedTracks.length;

  const { t } = useTranslation();

  useEffect(() => {
    async function fetchData() {
      if (isLoggedIn && !likedTracksIds.length) {
        setIsLoading(true);
        const data = await getLikedRequest(username);
        dispatch(tracksActions.getLiked(data.likedTracksIds));
      }
      setIsLoading(false);
    }
    fetchData();
  }, [likedTracksIds, isLoggedIn, username, dispatch]);

  const onTrack = (track) => {
    dispatch(tracksActions.setCurrentTrack(track));
    dispatch(tracksActions.setCurrentPlaylist(likedTracks));
  };

  return (
    <S.MostPopularContainer>
      <S.LikedTracksLink to="/you/likes">
        <S.IconContainer>
          <S.LikeIcon />
          <S.LikeCounter>{t('Liked.Likes', { count })}</S.LikeCounter>
        </S.IconContainer>
        <S.ViewAll>{t('Liked.View all')}</S.ViewAll>
      </S.LikedTracksLink>
      <TracksLoading isLoading={isLoading} />
      <S.LikedTracksContainer>
        {
          likedTracks.map((track) => (
            <S.LikedTrack
              key={track.id}
              onClick={() => onTrack(track)}
            >
              <S.LikedTrackCover cover={track.cover} />
              <S.LikedTrackName>
                {track.artist}
                -
                {track.name}
              </S.LikedTrackName>
            </S.LikedTrack>
          )).reverse()
        }
      </S.LikedTracksContainer>
    </S.MostPopularContainer>
  );
};

export default LikedTracks;
