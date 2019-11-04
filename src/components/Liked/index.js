import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';

import {
  setCurrentPlaylist, setCurrentTrack, stopMusic, playMusic, unlikeTrack,
} from 'redux/action';
import { dislikeRequest } from 'http/requests';

import * as S from './styled';

const Liked = () => {
  const likedTracks = useSelector((state) => state.user.likedTracks);
  const currentTrack = useSelector((state) => state.currentTrack);
  const isPlaying = useSelector((state) => state.isPlaying);
  const dispatch = useDispatch();

  const { addToast } = useToasts();

  const onPlay = (track) => {
    if (isPlaying && track.id === currentTrack.id) {
      dispatch(stopMusic());
    } else {
      dispatch(setCurrentPlaylist(likedTracks));
      dispatch(setCurrentTrack(track));
      dispatch(playMusic());
    }
  };

  const onLike = async (track) => {
    const data = await dislikeRequest(track);
    dispatch(unlikeTrack(data.likedTracks));
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
