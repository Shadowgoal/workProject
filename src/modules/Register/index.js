import React from 'react';
import { withRouter } from 'react-router-dom';

import MainHeader from 'components/MainHeader';
import RegisterRedirect from 'components/RegisterRedirect';
import Footer from 'components/Footer';

import * as S from './styled';

const Register = () => (
  <S.Container>
    <MainHeader />
    <RegisterRedirect />
    <Footer />
  </S.Container>
);

export default withRouter(Register);
