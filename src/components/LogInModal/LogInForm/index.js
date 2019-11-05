import React, { useState } from 'react';
import { Form } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useToasts } from 'react-toast-notifications';
import { useTranslation } from 'react-i18next';

import { onLogIn } from 'redux/action';
import { signInRequest } from 'http/requests';
import Loading from 'components/Loading';
import LogInInput from './LogInInput';
import { validation } from './validation';

import * as S from './styled';
import { InputError } from './LogInInput/styled';

const LogInForm = ({ setIsLogInModalOpened }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState('');

  const dispatch = useDispatch();

  const history = useHistory();

  const { addToast } = useToasts();

  const { t } = useTranslation();

  async function onSubmit(values) {
    setIsLoading(true);
    const data = await signInRequest(values);

    if (!data.error) {
      dispatch(onLogIn(data.user));
      localStorage.setItem('username', data.user.username);
      localStorage.setItem('authToken', data.token);
      setIsLogInModalOpened();
      history.push('/upload');
    } else {
      setErrors(data.message);
    }
    addToast(data.error ? data.message : 'Log In successful',
      {
        appearance: data.error ? 'error' : 'success',
        autoDismiss: true,
      });
    setIsLoading(false);
  }

  return (
    <S.FormContainer>
      <Loading isLoading={isLoading} />
      <Form
        onSubmit={onSubmit}
        validate={validation}
        render={({ handleSubmit, valid }) => (
          <S.LogInForm onSubmit={handleSubmit}>
            <S.LogIn>{t('Log In.Title')}</S.LogIn>
            <LogInInput
              type="text"
              name="username"
              placeholder={t('Log In.Username')}
            />
            <LogInInput
              type="password"
              name="password"
              placeholder={t('Log In.Password')}
            />
            {errors && (<InputError>{errors}</InputError>)}
            <S.ButtonField>
              <S.LogInButton
                type="submit"
                disabled={!valid}
              >
                {t('Log In.Sign In')}
              </S.LogInButton>
              <S.CloseButton
                type="button"
                onClick={setIsLogInModalOpened}
              >
                {t('Log In.Close')}
              </S.CloseButton>
            </S.ButtonField>
          </S.LogInForm>
        )}
      />
    </S.FormContainer>
  );
};

LogInForm.propTypes = {
  setIsLogInModalOpened: PropTypes.func.isRequired,
};

export default LogInForm;
