import React from 'react';

import * as S from './styled';

const ListenedTracks = () => (
  <S.MostPopularContainer>
    <S.ListenedTracksLink>
      <S.IconContainer>
        <S.CalendarIcon />
        <S.ListenedHistory>Listening History</S.ListenedHistory>
      </S.IconContainer>
      <S.ViewAll>View All</S.ViewAll>
    </S.ListenedTracksLink>
  </S.MostPopularContainer>
);

export default ListenedTracks;
