import React from 'react';
import PropTypes from 'prop-types';

import RegisterForm from 'components/Modal/Form';

import * as S from './styled';

const RegisterRedirect = ({ setIsModalOpened }) => (
  <S.Container>
    <S.MainTitle>
      Join SoundCloud to hear the latest from people you follow
    </S.MainTitle>
    <S.FormContainer>
      <RegisterForm setIsModalOpened={setIsModalOpened} />
    </S.FormContainer>
  </S.Container>
);

RegisterRedirect.propTypes = {
  setIsModalOpened: PropTypes.func.isRequired,
};

export default RegisterRedirect;
