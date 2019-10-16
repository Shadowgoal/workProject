import React from 'react';
import PropTypes from 'prop-types';

import Buttons from 'components/Buttons';
import MainTitle from './MainTitle';

import * as S from './styled';
import Logo from './Logo/styled';

const Header = ({ setIsModalOpened }) => (
  <S.Header>
    <S.LogoBtnContainer>
      <Logo />
      <Buttons setIsModalOpened={setIsModalOpened} />
    </S.LogoBtnContainer>
    <MainTitle />
  </S.Header>
);

Header.propTypes = {
  setIsModalOpened: PropTypes.func.isRequired,
};

export default Header;
