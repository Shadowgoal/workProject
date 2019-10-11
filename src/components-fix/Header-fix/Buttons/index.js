import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { onOpenModal } from 'redux/action';

import * as S from './styled';

const Buttons = (props) => (
  <S.SignField>
    <S.SignInBtn onClick={props.onOpenModal}>
      Sign in
    </S.SignInBtn>
    <S.CreateAccBtn onClick={props.onOpenModal}>
      Create account
    </S.CreateAccBtn>
  </S.SignField>
);

Buttons.propTypes = {
  onOpenModal: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ isModalOpened: state.isModalOpened });

const mapDispatchToProps = { onOpenModal };

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
