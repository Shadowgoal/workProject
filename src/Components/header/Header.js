import React, { Component } from 'react';
import * as S from './styled';
import MainTitle from './mainTitle/MainTitle';
import { connect } from 'react-redux';
import { onOpenModal } from './../../redux/action';

class Header extends Component {
  render() {
    return (
      <S.Header>
        <S.Logo></S.Logo>
        <S.SignField>
          <S.SignInBtn onClick={this.props.onOpenModal}>Sign in</S.SignInBtn>
          <S.CreateAccBtn onClick={this.props.onOpenModal}>
            Create account
          </S.CreateAccBtn>
        </S.SignField>
        <MainTitle />
      </S.Header>
    );
  }
}
const mapStateToProps = state => {
  return {
    isModalOpened: state.isModalOpened
  };
};

const mapDispatchToProps = {
  onOpenModal
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
