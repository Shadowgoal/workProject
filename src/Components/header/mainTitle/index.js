import React from 'react';
import { connect } from 'react-redux';

import { onOpenModal } from 'redux/action';

import * as S from './styled';

const MainTitle = (props) => {
  return (
    <S.Container>
      <S.Title>Connect on SoundCloud</S.Title>
      <S.Description>Discover, stream, and share a constantly expanding mix of music from emerging and major artists around the world.</S.Description>
      <S.ButtonContainer>
        <S.SignUpBtn onClick={props.onOpenModal}>Sign Up for free</S.SignUpBtn>
      </S.ButtonContainer>
    </S.Container>
  );
}

const mapStateToProps = state => {
  return {
    isModalOpened: state.isModalOpened
  };
};
    
const mapDispatchToProps = {
  onOpenModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainTitle);
