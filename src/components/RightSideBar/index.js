import React from 'react';

import Footer from 'components/Footer';
import LikedTracks from './LikedTracks';
import ListenedTracks from './ListenedTracks';

import * as S from './styled';

const RightSideBar = () => (
  <S.Container>
    <LikedTracks />
    <ListenedTracks />
    <Footer />
  </S.Container>
);

export default RightSideBar;
