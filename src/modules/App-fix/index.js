import React from 'react';
import { withRouter } from 'react-router-dom';

import Header from 'components/Header';
import Modal from 'components/Header/Modal';

import * as S from './styled';

const App = () => (
  <S.MainContainer>
    <Modal />
    <S.Container>
      <Header />
    </S.Container>
  </S.MainContainer>
);

export default withRouter(App);
