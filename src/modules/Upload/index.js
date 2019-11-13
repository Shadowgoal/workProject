import React, { useState } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import MainHeader from 'components/MainHeader';
import UploadForm from 'components/UploadForm';
import Footer from 'components/Footer';

import * as S from './styled';

const Upload = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isLogInModalOpened, setIsLogInModalOpened] = useState(false);

  const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);

  const toggleLogInModalVisibility = () => setIsLogInModalOpened(!isLogInModalOpened);
  const toggleModalVisibility = () => setIsModalOpened(!isModalOpened);

  return (
    <S.Container>
      {!isLoggedIn && <Redirect to="/register" />}
      <MainHeader
        isModalOpened={isModalOpened}
        setIsModalOpened={toggleModalVisibility}
        isLogInModalOpened={isLogInModalOpened}
        setIsLogInModalOpened={toggleLogInModalVisibility}
      />
      <S.BodyContainer>
        <UploadForm />
      </S.BodyContainer>
      <Footer />
    </S.Container>
  );
};

export default withRouter(Upload);
