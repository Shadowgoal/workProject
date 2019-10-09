import React from 'react';
import { withRouter } from 'react-router-dom';

import * as S from './styled';


const HomeBtn = () => {
  return (
      <S.Btn to='/'>
        <S.Logo>
        </S.Logo>
        <S.TextLogo>
          SOUNDCLOUD
        </S.TextLogo>
      </S.Btn>
  )
};

export default withRouter(HomeBtn);