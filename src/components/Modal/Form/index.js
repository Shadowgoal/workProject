import React, { useCallback } from 'react';
import { Form } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import instance from 'http/index';
import FormInput from './Input';
import { validation } from '../validation';

import * as S from './styled';

const RegisterForm = ({ setIsModalOpened }) => {
  const dispatch = useDispatch();
  const onRegister = useCallback(
    () => dispatch({ type: 'LOGIN' }),
    [dispatch],
  );
  const closeModal = () => setIsModalOpened(false);
  const location = useHistory();

  async function onSubmit(user) {
    const data = await instance.post('/signup', user)
      .then((response) => response.data);
    console.log(data);

    onRegister(data);
    sessionStorage.setItem('username', data.user.username);
    closeModal();
    location.push('/upload');
  }

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
                onClick={() => setIsModalOpened(false)}
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

RegisterForm.propTypes = {
  setIsModalOpened: PropTypes.func.isRequired,
};

export default RegisterForm;
