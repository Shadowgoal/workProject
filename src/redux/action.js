export const LOGIN = 'LOGIN';

export const onRegister = (user) => ({
  type: LOGIN,
  isLoggedIn: true,
  payload: user,
});
