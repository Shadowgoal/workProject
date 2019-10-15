import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RegisterForm from './Form';

import * as S from './styled';

const Modal = () => {
  const isModalOpened = useSelector((state) => state.isModalOpened);
  const dispatch = useDispatch();
  const onCloseModal = useCallback(
    () => dispatch({ type: 'CLOSE_MODAL' }),
    [dispatch],
  );
  return (
    <S.Container>
      <S.ModalWindowShadow
        visible={isModalOpened}
        onClick={onCloseModal}
      >
        <S.CloseModalX>x</S.CloseModalX>
      </S.ModalWindowShadow>
      <S.ModalWindow visible={isModalOpened}>
        <RegisterForm />
      </S.ModalWindow>
    </S.Container>
  );
};

export default Modal;
