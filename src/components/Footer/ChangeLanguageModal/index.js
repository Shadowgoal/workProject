import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import languages from './config';

import * as S from './styled';

const ChangeLanguageModal = ({ isOpened, onOpen }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    onOpen();
  };

  return (
    <S.Container>
      <S.ModalWindowShadow visible={isOpened} onClick={onOpen}>
        <S.CloseModalX />
      </S.ModalWindowShadow>
      <S.ModalWindow visible={isOpened}>
        <S.Title>{t('SelectLanguage')}</S.Title>
        <S.SelectLanguage>
          {
            languages.map((el, index) => (
              <S.Language onClick={() => changeLanguage(el.lng)} disabled={i18n.language === el.lng} key={index}>
                {el.language}
              </S.Language>
            ))
          }
        </S.SelectLanguage>
        <S.CloseModal onClick={onOpen}>{t('Log In.Close')}</S.CloseModal>
      </S.ModalWindow>
    </S.Container>
  );
};

ChangeLanguageModal.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
};

export default ChangeLanguageModal;
