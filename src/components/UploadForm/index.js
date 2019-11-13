import React from 'react';
import { useTranslation } from 'react-i18next';

import * as S from './styled';

const UploadForm = () => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <S.UploadContainer>
        <S.UploadTitle>
          {t('UploadForm.UploadTitle')}
        </S.UploadTitle>
        <S.UploadBtn>
          {t('UploadForm.UploadBtn')}
          (НЕТ БЭКЕНДА - НЕТ АПЛОУДА)
        </S.UploadBtn>
        <S.UploadFooter>
          {t('UploadForm.UploadFooter')}
        </S.UploadFooter>
      </S.UploadContainer>
    </S.Container>
  );
};

export default UploadForm;
