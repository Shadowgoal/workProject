import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import NavBarEls from './config';

import * as S from './styled';

const Nav = () => {
  const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);

  const { t } = useTranslation();

  const location = useLocation();

  return (
    <S.Container>
      {
        NavBarEls.map((el, index) => (
          <S.NavBtn
            key={index}
            to={isLoggedIn ? el.loggedPath : el.path}
            ifactive={location.pathname === el.loggedPath ? 1 : 0}
          >
            {t(`Nav.${el.name}`)}
          </S.NavBtn>
        ))
      }
    </S.Container>
  );
};

export default Nav;
