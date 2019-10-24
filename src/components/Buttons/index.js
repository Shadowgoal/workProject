import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import * as S from './styled';

const Buttons = ({ setIsModalOpened, setIsLogInModalOpened }) => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (
    <S.SignField vision={isLoggedIn}>
      <S.SignInBtn onClick={setIsLogInModalOpened}>
        Sign in
      </S.SignInBtn>
      <S.CreateAccBtn onClick={setIsModalOpened}>
        Create account
      </S.CreateAccBtn>
    </S.SignField>
  );
};

Buttons.propTypes = {
  setIsModalOpened: PropTypes.func.isRequired,
  setIsLogInModalOpened: PropTypes.func.isRequired,
};

export default Buttons;
