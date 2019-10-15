import React from 'react';

import RegisterForm from 'components/Modal/Form';

import * as S from './styled';

const RegisterRedirect = () => (
  <S.Container>
    <S.MainTitle>
      Join SoundCloud to hear the latest from people you follow
    </S.MainTitle>
    <S.FormContainer>
      <RegisterForm />
    </S.FormContainer>
  </S.Container>
);

export default RegisterRedirect;
