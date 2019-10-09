import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form } from 'react-final-form';

import Input from './Input';
import { validation } from './validation';
import { onCloseModal } from 'redux/action';

import * as S from './styled';

class Modal extends Component {
  state = {
    user: {},
    isLoggedin: false,
  };
  
  onSubmit = (values) => {
    if (values.email && values.password && values.username && values.confirm) {
      this.setState({
        isLoggedin: true,
      })
    }
    console.log(this.state)
       
  };


  render() {
    return (
      <S.Container>
        <S.ModalWindowShadow
          visible={this.props.isModalOpened}
          onClick={this.props.onCloseModal}
        >
            <S.CloseModalX>x</S.CloseModalX>
        </S.ModalWindowShadow>
        <S.ModalWindow visible={this.props.isModalOpened}>
          <Form
            onSubmit={this.onSubmit}
            initialValues={this.state}
            validate={validation}
            render={({ handleSubmit, submitting }) => (
              <S.RegisterForm onSubmit={handleSubmit}>
                <S.CreateAcc>Create Account</S.CreateAcc>
                <Input type="text" name='username' placeholder='Username' />
                <Input type="text" name='email' placeholder='Email' />
                <Input type="password" name='password' placeholder='Password' />
                <Input type="password" name='confirm' placeholder='Confirm' />
                <S.ButtonField>
                  <S.RegisterButton to='/upload' onClick={this.onSubmit} type="submit" disabled={submitting}>
                    Sign in
                  </S.RegisterButton>
                  <S.CloseButton
                    type="button"
                    onClick={this.props.onCloseModal}
                  >
                    Close
                  </S.CloseButton>
                </S.ButtonField>
              </S.RegisterForm>
            )}
          />
        </S.ModalWindow>
      </S.Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    isModalOpened: state.isModalOpened
  };
};

const mapDispatchToProps = {
  onCloseModal,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Modal));
