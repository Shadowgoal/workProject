import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import MainHeader from 'components/MainHeader';
import UploadForm from 'components/UploadForm';
import Footer from 'components/Footer';

import * as S from './styled';

const Upload = () => {
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
        <UploadForm />
      </S.BodyContainer>
      <Footer />
    </S.Container>
  );
};

export default withRouter(Upload);
