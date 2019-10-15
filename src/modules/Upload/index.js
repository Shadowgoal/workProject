import React from 'react';
import { withRouter } from 'react-router-dom';

import Modal from 'components/Modal';
import MainHeader from 'components/MainHeader';

import * as S from './styled';

const Upload = () => (
  <S.Container>
    <Modal />
    <MainHeader />
  </S.Container>
);

export default withRouter(Upload);
