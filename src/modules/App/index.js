import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import Header from 'components/Header';
import Modal from 'components/Modal';
import LogInModal from 'components/LogInModal';

import * as S from './styled';

const App = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isLogInModalOpened, setIsLogInModalOpened] = useState(false);
  const toggleLogInModalVisibility = () => {
    if (isLogInModalOpened) {
      setIsLogInModalOpened(false);
    } else if (!isLogInModalOpened) {
      setIsLogInModalOpened(true);
    }
  };
  const toggleModalVisibility = () => {
    if (isModalOpened) {
      setIsModalOpened(false);
    } else if (!isModalOpened) {
      setIsModalOpened(true);
    }
  };
  return (
    <S.MainContainer>
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
