import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import MainHeader from 'components/MainHeader';

import * as S from './styled';

const Upload = () => {
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
    </S.Container>
  );
};

export default withRouter(Upload);
