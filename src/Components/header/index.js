import React from 'react';

import Logo from './Logo';
import Buttons from './Buttons';
import MainTitle from './MainTitle';

import * as S from './styled';

const Header = () => {
    return (
      <S.Header>
        <Logo />
        <Buttons />
        <MainTitle />
      </S.Header>
    );
};

export default Header;
