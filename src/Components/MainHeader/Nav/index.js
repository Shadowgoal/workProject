import React from 'react';
import { withRouter } from 'react-router-dom';

import * as S from './styled';


const Nav = () => {
  return (
      <S.Container>
        <S.NavBtn to='/'>
          Home
        </S.NavBtn>
        <S.NavBtn to='/'>
          Stream
        </S.NavBtn>
        <S.NavBtn to='/'>
          Library
        </S.NavBtn>
      </S.Container>
  )
};

export default withRouter(Nav);