import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import NavBarEls from './config';

import * as S from './styled';

const Nav = () => {
  const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);

  const { t } = useTranslation();

  return (
    <S.Container>
      {
        NavBarEls.map((el, index) => (
          <S.NavBtn
            key={index}
            to={isLoggedIn ? el.loggedPath : el.path}
          >
            {t(`Nav.${el.name}`)}
          </S.NavBtn>
        ))
      }
    </S.Container>
  );
};

export default Nav;
