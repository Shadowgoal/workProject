import React from 'react';
import { connect } from 'react-redux';

import { onOpenModal } from 'redux/action';

import * as S from './styled';

const Buttons = (props) => {
  return (
    <S.SignField>
      <S.SignInBtn onClick={props.onOpenModal}>
        Sign in
      </S.SignInBtn>
      <S.CreateAccBtn onClick={props.onOpenModal}>
        Create account
      </S.CreateAccBtn>
    </S.SignField>
  )
};
const mapStateToProps = state => {
  return {
    isModalOpened: state.isModalOpened
  }
};

const mapDispatchToProps = {
  onOpenModal
};

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);