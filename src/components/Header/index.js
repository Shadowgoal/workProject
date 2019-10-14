import React from 'react';

import Buttons from './Buttons';
import MainTitle from './MainTitle';

import * as S from './styled';
import Logo from './Logo/styled';

const Header = () => (
  <S.Header>
    <Logo />
    <Buttons />
    <MainTitle />
  </S.Header>
);

export default Header;
