import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import MainHeader from 'components/MainHeader';
import RegisterRedirect from 'components/RegisterRedirect';
import Footer from 'components/Footer';

import * as S from './styled';

const Register = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isLogInModalOpened, setIsLogInModalOpened] = useState(false);

  const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);

  const toggleLogInModalVisibility = () => setIsLogInModalOpened(!isLogInModalOpened);
  const toggleModalVisibility = () => setIsModalOpened(!isModalOpened);

  return (
    <S.Container>
      {isLoggedIn && <Redirect to="/discover" />}
      <MainHeader
        isModalOpened={isModalOpened}
        setIsModalOpened={toggleModalVisibility}
        isLogInModalOpened={isLogInModalOpened}
        setIsLogInModalOpened={toggleLogInModalVisibility}
      />
      <RegisterRedirect setIsModalOpened={toggleModalVisibility} />
      <Footer />
    </S.Container>
  );
};

export default Register;
