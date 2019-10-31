import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TracksLoading from 'components/TracksLoading';
import instance from 'http/index';

import * as S from './styled';

const Weekly = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [playlist, setPlaylist] = useState([]);
  const currentTrack = useSelector((state) => state.currentTrack);
  const dispatch = useDispatch();

  const onTrack = (track) => {
    dispatch({ type: 'SET_CURRENT_PLAYLIST', payload: playlist });
    dispatch({ type: 'SET_CURRENT_TRACK', payload: track });
  };
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const data = await instance.get('/tracks').then((response) => response.data);
      if (!playlist.length) {
        setPlaylist(data.tracks);
      }
      setIsLoading(false);
    }
    fetchData();
  }, [setPlaylist, playlist]);

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>SoundCloud Weekly</S.Title>
        <S.TitleText>All of SoundCloud. Just for you.</S.TitleText>
      </S.TitleContainer>
      <S.SelectionPlaylistContainer>
        <S.CoverContainer src={currentTrack.cover} />
        <S.TrackContainer>
          <TracksLoading isLoading={isLoading} />
          {
            playlist.map((track) => (
              <S.Track
                key={track.id}
                onClick={() => onTrack(track)}
              >
                <S.TrackArtist>
                  {track.artist}
                </S.TrackArtist>
                -
                <S.TrackName>
                  {track.name}
                </S.TrackName>
              </S.Track>
            ))
          }
        </S.TrackContainer>
      </S.SelectionPlaylistContainer>
    </S.Container>
  );
};

export default Weekly;
