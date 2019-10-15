import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as S from './styled';

const Buttons = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  const onOpenModal = useCallback(
    () => dispatch({ type: 'OPEN_MODAL' }),
    [dispatch],
  );
  return (
    <S.SignField vision={isLoggedIn}>
      <S.SignInBtn onClick={onOpenModal}>
        Sign in
      </S.SignInBtn>
      <S.CreateAccBtn onClick={onOpenModal}>
        Create account
      </S.CreateAccBtn>
    </S.SignField>
  );
};

export default Buttons;
