import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import MainHeader from 'components/MainHeader';
import RegisterRedirect from 'components/RegisterRedirect';
import Footer from 'components/Footer';

import * as S from './styled';

const Register = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isLogInModalOpened, setIsLogInModalOpened] = useState(false);
  return (
    <S.Container>
      <MainHeader
        isModalOpened={isModalOpened}
        setIsModalOpened={setIsModalOpened}
        isLogInModalOpened={isLogInModalOpened}
        setIsLogInModalOpened={setIsLogInModalOpened}
      />
      <RegisterRedirect setIsModalOpened={setIsModalOpened} />
      <Footer />
    </S.Container>
  );
};

export default withRouter(Register);
