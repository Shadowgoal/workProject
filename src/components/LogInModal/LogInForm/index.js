import React, { useState, useCallback } from 'react';
import { Form } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import instance from 'http/index';
import Loading from 'components/Loading';
import LogInInput from './LogInInput';
import { validation } from './validation';

import * as S from './styled';

const LogInForm = ({ setIsLogInModalOpened }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const onLogIn = useCallback(
    () => dispatch({ type: 'LOG_IN' }),
    [dispatch],
  );
  const closeModal = () => setIsLogInModalOpened(false);
  const location = useHistory();

  async function onSubmit(user) {
    setIsLoading(true);
    const data = await instance.post('/signup', user)
      .then((response) => response.data);
    onLogIn(data.user);
    sessionStorage.setItem('username', data.user.username);
    sessionStorage.setItem('authToken', data.token);
    closeModal();
    location.push('/upload');
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
            <S.LogIn>Log in</S.LogIn>
            <LogInInput type="text" name="username" placeholder="Username" />
            <LogInInput type="password" name="password" placeholder="Password" />
            <S.ButtonField>
              <S.LogInButton
                type="submit"
                disabled={!valid}
              >
                Sign in
              </S.LogInButton>
              <S.CloseButton
                type="button"
                onClick={() => setIsLogInModalOpened(false)}
              >
                Close
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
