import React from 'react';
import PropTypes from 'prop-types';

import RegisterForm from './Form';

import * as S from './styled';

const Modal = ({ isModalOpened, setIsModalOpened }) => (
  <S.Container>
    <S.ModalWindowShadow
      visible={isModalOpened}
      onClick={setIsModalOpened}
    >
      <S.CloseModalX>x</S.CloseModalX>
    </S.ModalWindowShadow>
    <S.ModalWindow visible={isModalOpened}>
      <RegisterForm setIsModalOpened={setIsModalOpened} />
    </S.ModalWindow>
  </S.Container>
);

Modal.propTypes = {
  isModalOpened: PropTypes.bool.isRequired,
  setIsModalOpened: PropTypes.func.isRequired,
};

export default Modal;
