import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import Header from 'components/Header';
import Modal from 'components/Modal';

import * as S from './styled';

const App = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  return (
    <S.MainContainer>
      <Modal isModalOpened={isModalOpened} setIsModalOpened={setIsModalOpened} />
      <S.Container>
        <Header setIsModalOpened={setIsModalOpened} />
      </S.Container>
    </S.MainContainer>
  );
};

export default withRouter(App);
