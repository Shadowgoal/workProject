import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import * as S from './styled';

const Nav = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const { t } = useTranslation();

  return (
    <S.Container>
      <S.NavBtn to={isLoggedIn ? '/discover' : '/'}>
        {t('Nav.Home')}
      </S.NavBtn>
      <S.NavBtn to={isLoggedIn ? '/discover' : '/register'}>
        {t('Nav.Stream')}
      </S.NavBtn>
      <S.NavBtn to={isLoggedIn ? '/you/library' : '/register'}>
        {t('Nav.Library')}
      </S.NavBtn>
    </S.Container>
  );
};

export default Nav;
