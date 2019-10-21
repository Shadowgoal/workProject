import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import TracksLoading from 'components/TracksLoading';
import instance from 'http/index';

import * as S from './styled';

const Weekly = () => {
  const [tracks, setTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const data = await instance.get('/tracks').then((response) => response.data);
      setTracks(data.tracks);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>SoundCloud Weekly</S.Title>
        <S.TitleText>All of SoundCloud. Just for you.</S.TitleText>
      </S.TitleContainer>
      <S.SelectionPlaylistContainer>
        <S.TrackContainer>
          <TracksLoading isLoading={isLoading} />
          {
            tracks.map((track) => (
              <S.Track key={track.id} onClick={() => dispatch({ type: 'SET_CURRENT_TRACK', payload: track })}>
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
