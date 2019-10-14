import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as S from './styled';

const UserNav = (props) => (
  <S.UserNavContainer vision={props.isLoggedIn}>
    <S.UserContainer>
      <S.UserImage />
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

UserNav.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({ isLoggedIn: state.isLoggedIn });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserNav);
