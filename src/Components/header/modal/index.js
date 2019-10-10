import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { onCloseModal, onRegister } from 'redux/action';
import { validation } from './validation'
import RegisterForm from './Form';

import * as S from './styled';

class Modal extends Component {
  onSubmit = () => {
    if (validation) {
      console.log(this.props);
      this.props.onRegister();
      this.props.onCloseModal();
      this.props.history.push('/upload');
    }   
  };
  render () {  
    return (
      <S.Container>
        <S.ModalWindowShadow
          visible={this.props.isModalOpened}
          onClick={this.props.onCloseModal}
        >
          <S.CloseModalX>x</S.CloseModalX>
        </S.ModalWindowShadow>
        <S.ModalWindow visible={this.props.isModalOpened}>
          <RegisterForm onSubmit={this.onSubmit} />
        </S.ModalWindow>
      </S.Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    isModalOpened: state.isModalOpened,
    isLoggedIn: state.isLoggedIn
  };
};

const mapDispatchToProps = {
  onCloseModal,
  onRegister,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Modal));
