import React from 'react';

import Footer from 'components/Footer';

import * as S from './styled';

const RightSideBar = () => (
  <S.Container>
    <S.MostPopularContainer>
      <S.LikedTracksLink>
        <S.IconContainer>
          <S.LikeIcon />
          <S.LikeCounter>0 likes</S.LikeCounter>
        </S.IconContainer>
        <S.ViewAll>View All</S.ViewAll>
      </S.LikedTracksLink>
    </S.MostPopularContainer>
    <S.MostPopularContainer>
      <S.LikedTracksLink>
        <S.IconContainer>
          <S.CalendarIcon />
          <S.LikeCounter>Listening History</S.LikeCounter>
        </S.IconContainer>
        <S.ViewAll>View All</S.ViewAll>
      </S.LikedTracksLink>
    </S.MostPopularContainer>
    <Footer />
  </S.Container>
);

export default RightSideBar;
