import React from 'react';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';

import * as S from './styled';

const HomeBtn = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  useLocation();
  return (
    <S.Btn to={{
      pathname: '/',
    }}
    >
      <S.Logo />
      <S.TextLogo isVisible={isLoggedIn}>
        SOUNDCLOUD
      </S.TextLogo>
    </S.Btn>
  );
};

export default HomeBtn;
