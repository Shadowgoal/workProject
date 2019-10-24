import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import MainHeader from 'components/MainHeader';

import * as S from './styled';

const Upload = () => {
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
    <S.Container>
      <MainHeader
        isModalOpened={isModalOpened}
        setIsModalOpened={toggleModalVisibility}
        isLogInModalOpened={isLogInModalOpened}
        setIsLogInModalOpened={toggleLogInModalVisibility}
      />
    </S.Container>
  );
};

export default withRouter(Upload);
