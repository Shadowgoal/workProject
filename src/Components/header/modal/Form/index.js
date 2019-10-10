import React from 'react';
import { Form } from 'react-final-form';
import { connect } from 'react-redux'

import FormInput from './Input';
import { validation } from '../validation';
import { onCloseModal } from 'redux/action';

import * as S from './styled';



const RegisterForm = (props) => {
  return (
    <S.FormContainer>
    <Form
      onSubmit={props.onSubmit}
      validate={validation}
      render={({ handleSubmit, submitting }) => (
        <S.RegisterForm onSubmit={handleSubmit}>
          <S.CreateAcc>Create Account</S.CreateAcc>
          <FormInput type="text" name='username' placeholder='Username' />
          <FormInput type="text" name='email' placeholder='Email' />
          <FormInput type="password" name='password' placeholder='Password' />
          <FormInput type="password" name='confirm' placeholder='Confirm' />
          <S.ButtonField>
            <S.RegisterButton onClick={props.onSubmit} type="submit" disabled={submitting}>
              Sign in
            </S.RegisterButton>
            <S.CloseButton
              type="button"
              onClick={props.onCloseModal}
            >
              Close
            </S.CloseButton>
          </S.ButtonField>
        </S.RegisterForm>
      )}
    />
      </S.FormContainer>
  )
}

const mapStateToProps = state => {
  return {
    isModalOpened: state.isModalOpened
  };
};

const mapDispatchToProps = {
  onCloseModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);