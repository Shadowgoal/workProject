import React from 'react';
import PropTypes from 'prop-types';

import LogInForm from './LogInForm';
import * as S from './styled';

const LogInModal = ({ isLogInModalOpened, setIsLogInModalOpened }) => (
  <S.Container>
    <S.ModalWindowShadow
      visible={isLogInModalOpened}
      onClick={setIsLogInModalOpened}
    >
      <S.CloseModalX />
    </S.ModalWindowShadow>
    <S.ModalWindow visible={isLogInModalOpened}>
      <LogInForm setIsLogInModalOpened={setIsLogInModalOpened} />
    </S.ModalWindow>
  </S.Container>
);

LogInModal.propTypes = {
  isLogInModalOpened: PropTypes.bool.isRequired,
  setIsLogInModalOpened: PropTypes.func.isRequired,
};

export default LogInModal;
