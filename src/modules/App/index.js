import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import Header from 'components/Header';
import Modal from 'components/Modal';
import LogInModal from 'components/LogInModal';

import * as S from './styled';

const App = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isLogInModalOpened, setIsLogInModalOpened] = useState(false);
  return (
    <S.MainContainer>
      <Modal
        isModalOpened={isModalOpened}
        setIsModalOpened={setIsModalOpened}
      />
      <LogInModal
        isLogInModalOpened={isLogInModalOpened}
        setIsLogInModalOpened={setIsLogInModalOpened}
      />
      <S.Container>
        <Header setIsModalOpened={setIsModalOpened} setIsLogInModalOpened={setIsLogInModalOpened} />
      </S.Container>
    </S.MainContainer>
  );
};

export default withRouter(App);
