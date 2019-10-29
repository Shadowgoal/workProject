import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import UserImage from 'components/UserImage/styled';
import userNavEl from './config';

import * as S from './styled';

const UserNav = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const history = useHistory();

  return (
    <S.UserNavContainer vision={isLoggedIn}>
      <S.UserContainer>
        <UserImage />
        <S.UserNameContainer>
          {sessionStorage.getItem('username')}
        </S.UserNameContainer>
        <S.UserDropDownArrow />
        <S.DropDownContainer>
          {
            userNavEl.map((el, index) => (
              <S.DropDownItem onClick={() => history.push(el.path)} key={index}>
                <S.DropDownIcon img={el.src} />
                <S.DropDownText>
                  {el.name}
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
