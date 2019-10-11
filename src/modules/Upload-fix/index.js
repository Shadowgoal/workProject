import React from 'react';
import { withRouter } from 'react-router-dom';

import MainHeader from 'components/MainHeader';

import * as S from './styled';

const Upload = () => (
  <S.Container>
    <MainHeader />
  </S.Container>
);

export default withRouter(Upload);
