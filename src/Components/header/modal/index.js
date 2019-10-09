import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';

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
            render={({ handleSubmit, invalid, submitting }) => (
              <S.RegisterForm onSubmit={handleSubmit}>
                <S.CreateAcc>Create Account</S.CreateAcc>
                <Field name="username">
                  {({ input, meta }) => (
                    <S.InputField>
                      <S.Label>Username</S.Label>
                      <S.Input {...input} id="username" type="text" placeholder="Username" />
                      {meta.error && meta.touched && (
                        <S.InputError>{meta.error}</S.InputError>
                      )}
                    </S.InputField>
                  )}
                </Field>
                <Field name="email">
                  {({ input, meta }) => (
                    <S.InputField>
                      <S.Label>Email</S.Label>
                      <S.Input {...input} id="email" type="text" placeholder="Email" />
                      {meta.error && meta.touched && (
                        <S.InputError>{meta.error}</S.InputError>
                      )}
                    </S.InputField>
                  )}
                </Field>
                <Field name="password">
                  {({ input, meta }) => (
                    <S.InputField>
                      <S.Label>Password</S.Label>
                      <S.Input
                        {...input}
                        id="password"
                        type="password"
                        placeholder="Password"
                      />
                      {meta.error && meta.touched && (
                        <S.InputError>{meta.error}</S.InputError>
                      )}
                    </S.InputField>
                  )}
                </Field>
                <Field name="confirm">
                  {({ input, meta }) => (
                    <S.InputField>
                      <S.Label>Confirm Password</S.Label>
                      <S.Input {...input} id="confirm" type="password" placeholder="Confirm" />
                      {meta.error && meta.touched && (
                        <S.InputError>{meta.error}</S.InputError>
                      )}
                    </S.InputField>
                  )}
                </Field>
                <S.ButtonField className="buttons">
                  <S.RegisterButton onClick={this.onSubmit} type="submit" disabled={submitting}>
                    {this.state.isLoggedin ? <Redirect push to='/upload' /> : <Redirect to='/' />}
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
