import React, { useState } from 'react';
import { Form } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useToasts } from 'react-toast-notifications';
import { useTranslation } from 'react-i18next';

import { setAuth } from 'services/localStorageServices';
import { actions as authActions } from 'redux/auth';
import { signUpRequest } from 'http/requests';
import Loading from 'components/Loading';
import FormInput from './Input';
import { validation } from '../validation';

import * as S from './styled';
import { InputError } from './Input/styled';

const RegisterForm = ({ setIsModalOpened }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState('');

  const dispatch = useDispatch();

  const history = useHistory();

  const { addToast } = useToasts();

  const { t } = useTranslation();

  const onSubmit = async (values) => {
    setIsLoading(true);
    const data = await signUpRequest(values);

    if (!data.error) {
      setIsModalOpened();
      setIsLoading(false);
      dispatch(authActions.signUp(data.user));
      setAuth(data);
      history.push('/discover');
    } else {
      setIsLoading(false);
      setErrors(data.message);
    }
    addToast(data.error ? data.message : 'Registered successfully',
      {
        appearance: data.error ? 'error' : 'success',
        autoDismiss: true,
      });
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
            <FormInput
              name="username"
              placeholder={t('Sign Up.Username')}
            />
            <FormInput
              name="email"
              placeholder={t('Sign Up.Email')}
            />
            <FormInput
              type="password"
              name="password"
              placeholder={t('Sign Up.Password')}
            />
            <FormInput
              type="password"
              name="confirm"
              placeholder={t('Sign Up.Confirm')}
            />
            {errors && (<InputError>{errors}</InputError>)}
            <S.ButtonField>
              <S.RegisterButton
                type="submit"
                disabled={!valid}
              >
                {t('Log In.Sign In')}
              </S.RegisterButton>
              <S.CloseButton
                type="button"
                onClick={setIsModalOpened}
              >
                {t('Log In.Close')}
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
