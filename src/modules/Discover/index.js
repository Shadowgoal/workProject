import React, { useState } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import MainHeader from 'components/MainHeader';
import DiscoverContainer from 'components/DiscoverContainer';
import RightSideBar from 'components/RightSideBar';

import * as S from './styled';

const Discover = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isLogInModalOpened, setIsLogInModalOpened] = useState(false);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
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
      <Redirect to={isLoggedIn ? '/discover' : '/register'} />
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
