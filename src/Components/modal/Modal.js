import React, { Component } from 'react';
import * as S from './styled';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { onCloseModal } from './../../redux/action';
import { Form, Field } from 'react-final-form';




class Modal extends Component {
  state = {
    user: {},
    isLoggedin: false,
  };
  
  onSubmit = async values => {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
    await sleep(300);
    const user = {
        username: values.username,
        email: values.email,
        password: values.password,
        confirm: values.confirm
    }

    this.setState({
      user,
      isLoggedin: true,
    })
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
            validate={user => {
              const errors = {};
              if (!user.username) {
                errors.username = 'Required';
              }
              if (!user.email) {
                errors.email = 'Reguired';
              }
              if (!user.password) {
                errors.password = 'Required';
              }
              if (!user.confirm) {
                errors.confirm = 'Required';
              } else if (user.confirm !== user.password) {
                errors.confirm = 'Must match';
              }
              return errors;
            }}
            render={({ handleSubmit, invalid }) => (
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
                  <S.RegisterButton onClick={this.onSubmit} type="submit" disabled={invalid}>
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
