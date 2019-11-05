import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import * as S from './styled';

const Buttons = ({ setIsModalOpened, setIsLogInModalOpened }) => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const { t } = useTranslation('Buttons', { useSuspense: false });

  return (
    <S.SignField vision={isLoggedIn}>
      <S.SignInBtn onClick={setIsLogInModalOpened}>
        {t('Sign In')}
      </S.SignInBtn>
      <S.CreateAccBtn onClick={setIsModalOpened}>
        {t('Create Account')}
      </S.CreateAccBtn>
    </S.SignField>
  );
};

Buttons.propTypes = {
  setIsModalOpened: PropTypes.func.isRequired,
  setIsLogInModalOpened: PropTypes.func.isRequired,
};

export default Buttons;
