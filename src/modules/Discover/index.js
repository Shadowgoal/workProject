import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import MainHeader from 'components/MainHeader';
import DiscoverContainer from 'components/DiscoverContainer';
import RightSideBar from 'components/RightSideBar';

import * as S from './styled';

const Discover = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isLogInModalOpened, setIsLogInModalOpened] = useState(false);

  const toggleLogInModalVisibility = () => setIsLogInModalOpened(!isLogInModalOpened);
  const toggleModalVisibility = () => setIsModalOpened(!isModalOpened);

  return (
    <S.Container>
      <MainHeader
        isModalOpened={isModalOpened}
        setIsModalOpened={toggleModalVisibility}
        isLogInModalOpened={isLogInModalOpened}
        setIsLogInModalOpened={toggleLogInModalVisibility}
      />
      <S.BodyContainer>
        <DiscoverContainer />
        <RightSideBar />
      </S.BodyContainer>
    </S.Container>
  );
};

export default withRouter(Discover);
