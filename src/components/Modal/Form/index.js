import React, { useState, useCallback } from 'react';
import { Form } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import instance from 'http/index';
import Loading from 'components/Loading';
import FormInput from './Input';
import { validation } from '../validation';

import * as S from './styled';
import { InputError } from './Input/styled';

const RegisterForm = ({ setIsModalOpened }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState('');
  const dispatch = useDispatch();
  const onRegister = useCallback(
    (user) => dispatch({ type: 'SIGN_UP', payload: user }),
    [dispatch],
  );
  const closeModal = () => setIsModalOpened(false);
  const location = useHistory();

  const onSubmit = async (values) => {
    setIsLoading(true);
    const data = await instance.post('/signup', values)
      .then((response) => response.data)
      .catch(() => ({ error: true, message: 'Password or email is already exists' }));
    if (!data.error) {
      onRegister(data.user);
      sessionStorage.setItem('username', data.user.username);
      sessionStorage.setItem('authToken', data.token);
      closeModal();
      location.push('/upload');
    } else {
      setErrors(data.message);
    }
    setIsLoading(false);
  };

  return (
    <S.FormContainer>
      <Loading isLoading={isLoading} />
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
            {errors && (<InputError>{errors}</InputError>)}
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
