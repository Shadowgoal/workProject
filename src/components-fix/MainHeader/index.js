import React from 'react';

import Modal from 'components/Header/Modal';
import HomeBtn from './HomeBtn';
import Nav from './Nav';
import NavSearch from './NavSearch';
import Buttons from './SignUp';
import MoreBtn from './MoreBtn';

import * as S from './styled';

const MainHeader = () => (
  <S.Header>
    <Modal />
    <S.Container>
      <HomeBtn />
      <Nav />
      <NavSearch />
      <Buttons />
      <MoreBtn />
    </S.Container>
  </S.Header>
);

export default MainHeader;
