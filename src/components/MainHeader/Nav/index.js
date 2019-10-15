import React from 'react';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';

import * as S from './styled';

const Nav = () => {
  useLocation();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  return (
    <S.Container>
      <S.NavBtn to={isLoggedIn ? '/discover' : '/'}>
        Home
      </S.NavBtn>
      <S.NavBtn to={isLoggedIn ? '/discover' : '/register'}>
        Stream
      </S.NavBtn>
      <S.NavBtn to={isLoggedIn ? '/discover' : '/register'}>
        Library
      </S.NavBtn>
    </S.Container>
  );
};

export default Nav;
