import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import ChangeLanguageModal from './ChangeLanguageModal';

import * as S from './styled';

const Footer = () => {
  const [isChangeLanguageModalOpened, setIsChangeLanguageModalOpened] = useState(false);

  const { t } = useTranslation();

  const toggleChangeLanguageModalVisibility = () => setIsChangeLanguageModalOpened(!isChangeLanguageModalOpened);

  return (
    <S.Container>
      <ChangeLanguageModal
        isOpened={isChangeLanguageModalOpened}
        onOpen={toggleChangeLanguageModalVisibility}
      />
      <S.TextContainer>
        Copyright SoundCloud. All rights reserved © 2009 - 2019
        <S.ChangeLanguage onClick={toggleChangeLanguageModalVisibility}>{t('Language')}</S.ChangeLanguage>
      </S.TextContainer>
    </S.Container>
  );
};

export default Footer;
