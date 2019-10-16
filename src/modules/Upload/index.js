import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import MainHeader from 'components/MainHeader';

import * as S from './styled';

const Upload = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  return (
    <S.Container>
      <MainHeader isModalOpened={isModalOpened} setIsModalOpened={setIsModalOpened} />
    </S.Container>
  );
};

export default withRouter(Upload);
