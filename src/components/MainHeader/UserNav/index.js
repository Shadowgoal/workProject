import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import UserImage from 'components/UserImage/styled';
import userNavEls from './config';

import * as S from './styled';

const UserNav = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const { t } = useTranslation();

  return (
    <S.UserNavContainer vision={isLoggedIn}>
      <S.UserContainer>
        <UserImage />
        <S.UserNameContainer>
          {localStorage.getItem('username')}
        </S.UserNameContainer>
        <S.UserDropDownArrow />
        <S.DropDownContainer>
          {
            userNavEls.map((el, index) => (
              <S.DropDownItem to={el.path} key={index}>
                <S.DropDownIcon img={el.src} />
                <S.DropDownText>
                  {t(`UserNav.${el.name}`)}
                </S.DropDownText>
              </S.DropDownItem>
            ))
          }
        </S.DropDownContainer>
      </S.UserContainer>
    </S.UserNavContainer>
  );
};

export default UserNav;
