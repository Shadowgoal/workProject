import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import MainHeader from 'components/MainHeader';
import DiscoverContainer from 'components/DiscoverContainer';
import RightSideBar from 'components/RightSideBar';

import * as S from './styled';

const Discover = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  return (
    <S.Container>
      <MainHeader isModalOpened={isModalOpened} setIsModalOpened={setIsModalOpened} />
      <S.BodyContainer>
        <DiscoverContainer />
        <RightSideBar />
      </S.BodyContainer>
    </S.Container>
  );
};

export default withRouter(Discover);
