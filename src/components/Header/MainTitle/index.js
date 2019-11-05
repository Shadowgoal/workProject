import React from 'react';

import { useTranslation } from 'react-i18next';
import 'i18n';

import * as S from './styled';

const MainTitle = () => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <S.Title>{t('MainTitle.Title')}</S.Title>
      <S.Description>
        {t('Description')}
      </S.Description>
      <S.ButtonContainer>
        <S.SignUpBtn to="/upload">{t('Upload')}</S.SignUpBtn>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default MainTitle;
