import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import RegisterForm from 'components/Modal/Form';

import * as S from './styled';

const RegisterRedirect = ({ setIsModalOpened }) => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <S.MainTitle>
        {t('RegisterRedirect.MainTitle')}
      </S.MainTitle>
      <S.FormContainer>
        <RegisterForm setIsModalOpened={setIsModalOpened} />
      </S.FormContainer>
    </S.Container>
  );
};

RegisterRedirect.propTypes = {
  setIsModalOpened: PropTypes.func.isRequired,
};

export default RegisterRedirect;
