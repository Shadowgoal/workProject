import React from 'react';
import PropTypes from 'prop-types';

import LogInModal from 'components/LogInModal';
import Modal from 'components/Modal';
import Buttons from 'components/Buttons';
import HomeBtn from './HomeBtn';
import Nav from './Nav';
import NavSearch from './NavSearch';
import MoreBtn from './MoreBtn';

import * as S from './styled';

const MainHeader = ({
  isModalOpened,
  setIsModalOpened,
  isLogInModalOpened,
  setIsLogInModalOpened,
}) => (
  <S.MainContainer>
    <LogInModal isLogInModalOpened={isLogInModalOpened} setIsLogInModalOpened={setIsLogInModalOpened} />
    <Modal isModalOpened={isModalOpened} setIsModalOpened={setIsModalOpened} />
    <S.Header>
      <S.Container>
        <HomeBtn />
        <Nav />
        <NavSearch />
        <Buttons
          isModalOpened={isModalOpened}
          setIsModalOpened={setIsModalOpened}
          isLogInModalOpened={isLogInModalOpened}
          setIsLogInModalOpened={setIsLogInModalOpened}
        />
        <MoreBtn />
      </S.Container>
    </S.Header>
  </S.MainContainer>
);

MainHeader.propTypes = {
  isModalOpened: PropTypes.bool.isRequired,
  setIsModalOpened: PropTypes.func.isRequired,
  isLogInModalOpened: PropTypes.bool.isRequired,
  setIsLogInModalOpened: PropTypes.func.isRequired,
};

export default MainHeader;
