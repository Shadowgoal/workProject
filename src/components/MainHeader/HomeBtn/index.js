import React from 'react';
import { useSelector } from 'react-redux';

import * as S from './styled';

const HomeBtn = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (
    <S.Btn to={isLoggedIn ? '/discover' : '/'}>
      <S.Logo />
      <S.TextLogo isVisible={isLoggedIn}>
        SOUNDCLOUD
      </S.TextLogo>
    </S.Btn>
  );
};

export default HomeBtn;
