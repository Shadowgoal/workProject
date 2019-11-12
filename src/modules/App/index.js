import React, { useState } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from 'components/Header';
import Modal from 'components/Modal';
import LogInModal from 'components/LogInModal';

import * as S from './styled';

const App = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isLogInModalOpened, setIsLogInModalOpened] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const toggleLogInModalVisibility = () => setIsLogInModalOpened(!isLogInModalOpened);
  const toggleModalVisibility = () => setIsModalOpened(!isModalOpened);

  return (
    <S.MainContainer>
      <Redirect to={isLoggedIn ? '/discover' : '/'} />
      <Modal
        isModalOpened={isModalOpened}
        setIsModalOpened={toggleModalVisibility}
      />
      <LogInModal
        isLogInModalOpened={isLogInModalOpened}
        setIsLogInModalOpened={toggleLogInModalVisibility}
      />
      <S.Container>
        <Header setIsModalOpened={toggleModalVisibility} setIsLogInModalOpened={toggleLogInModalVisibility} />
      </S.Container>
    </S.MainContainer>
  );
};

export default withRouter(App);
