import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import UserImage from 'components/UserImage/styled';
import * as S from './styled';

const UserNav = ({ isLoggedIn, user }) => (
  <S.UserNavContainer vision={isLoggedIn}>
    <S.UserContainer>
      <UserImage />
      <S.UserNameContainer>
        {user.username}
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

UserNav.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = ({ user, isLoggedIn }) => ({
  isLoggedIn,
  user,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserNav);
