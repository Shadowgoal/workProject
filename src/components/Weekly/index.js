import React, { useState, useEffect } from 'react';

import instance from 'http/index';
import * as S from './styled';

const Weekly = () => {
  const [tracks, setTraks] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await instance.get('/tracks').then((response) => response.data);
      setTraks(data.tracks);
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
        {
          tracks.map((track) => (<div key={track.id}>{track.name}</div>))
        }
      </S.SelectionPlaylistContainer>
    </S.Container>
  );
};

export default Weekly;
