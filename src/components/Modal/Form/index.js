import React, { useCallback } from 'react';
import { Form } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import FormInput from './Input';
import { validation } from '../validation';

import * as S from './styled';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const onCloseModal = useCallback(
    () => dispatch({ type: 'CLOSE_MODAL' }),
    [dispatch],
  );
  const onRegister = useCallback(
    () => dispatch({ type: 'LOGIN' }),
    [dispatch],
  );
  const location = useHistory();
  const onSubmit = (values) => {
    console.log(values);
    onRegister(values);
    onCloseModal();
    localStorage.setItem('username', values.username);
    location.push('/upload');
  };
  return (
    <S.FormContainer>
      <Form
        onSubmit={onSubmit}
        validate={validation}
        render={({ handleSubmit, valid }) => (
          <S.RegisterForm onSubmit={handleSubmit}>
            <S.CreateAcc>Create Account</S.CreateAcc>
            <FormInput type="text" name="username" placeholder="Username" />
            <FormInput type="text" name="email" placeholder="Email" />
            <FormInput type="password" name="password" placeholder="Password" />
            <FormInput type="password" name="confirm" placeholder="Confirm" />
            <S.ButtonField>
              <S.RegisterButton
                type="submit"
                disabled={!valid}
              >
                Sign in
              </S.RegisterButton>
              <S.CloseButton
                type="button"
                onClick={onCloseModal}
              >
                Close
              </S.CloseButton>
            </S.ButtonField>
          </S.RegisterForm>
        )}
      />
    </S.FormContainer>
  );
};

export default RegisterForm;
