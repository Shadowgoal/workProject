import React, { useState } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import MainHeader from 'components/MainHeader';
import LibraryNavBar from 'components/LibraryNavBar';
import RecentlyPlayed from 'components/RecentlyPlayed';
import Liked from 'components/Liked';
import Footer from 'components/Footer';

import * as S from './styled';

const Library = () => {
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
      <Redirect to={isLoggedIn ? '/you/library' : '/register'} />
      <MainHeader
        isModalOpened={isModalOpened}
        setIsModalOpened={toggleModalVisibility}
        isLogInModalOpened={isLogInModalOpened}
        setIsLogInModalOpened={toggleLogInModalVisibility}
      />
      <S.BodyContainer>
        <LibraryNavBar />
        <RecentlyPlayed />
        <Liked />
      </S.BodyContainer>
      <Footer />
    </S.Container>
  );
};

export default withRouter(Library);