import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'components/Modal';
import Buttons from 'components/Buttons';
import HomeBtn from './HomeBtn';
import Nav from './Nav';
import NavSearch from './NavSearch';
import MoreBtn from './MoreBtn';

import * as S from './styled';

const MainHeader = ({ isModalOpened, setIsModalOpened }) => (
  <S.MainContainer>
    <Modal isModalOpened={isModalOpened} setIsModalOpened={setIsModalOpened} />
    <S.Header>
      <S.Container>
        <HomeBtn />
        <Nav />
        <NavSearch />
        <Buttons isModalOpened={isModalOpened} setIsModalOpened={setIsModalOpened} />
        <MoreBtn />
      </S.Container>
    </S.Header>
  </S.MainContainer>
);

MainHeader.propTypes = {
  isModalOpened: PropTypes.bool.isRequired,
  setIsModalOpened: PropTypes.func.isRequired,
};

export default MainHeader;
