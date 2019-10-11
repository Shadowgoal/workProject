import React from 'react';
import { withRouter } from 'react-router-dom';

import MainHeader from 'components/MainHeader';
import RightSideBar from 'components/RightSideBar';

import * as S from './styled';

const Discover = () => (
  <S.Container>
    <MainHeader />
    <S.BodyContainer>
      <RightSideBar />
    </S.BodyContainer>
  </S.Container>
);

export default withRouter(Discover);
