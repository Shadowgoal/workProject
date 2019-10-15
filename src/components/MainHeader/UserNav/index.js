import React from 'react';
import { useSelector } from 'react-redux';

import UserImage from 'components/UserImage/styled';
import * as S from './styled';

const UserNav = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  return (
    <S.UserNavContainer vision={isLoggedIn}>
      <S.UserContainer>
        <UserImage />
        <S.UserNameContainer>
          {localStorage.getItem('username')}
        </S.UserNameContainer>
        <S.UserDropDown />
        <S.DropDownContainer>
          <S.DropDownItem>
            <S.DropDownProfileIcon />
            <S.DropDownText>
              Profile
            </S.DropDownText>
          </S.DropDownItem>
          <S.DropDownItem>
            <S.DropDownLikesIcon />
            <S.DropDownText>
              Likes
            </S.DropDownText>
          </S.DropDownItem>
          <S.DropDownItem>
            <S.DropDownPlaylistsIcon />
            <S.DropDownText>
              Playlist
            </S.DropDownText>
          </S.DropDownItem>
        </S.DropDownContainer>
      </S.UserContainer>
    </S.UserNavContainer>
  );
};

export default UserNav;
