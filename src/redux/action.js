export const OPEN_MODAL = 'OPEN_MODAL';

export const CLOSE_MODAL = 'CLOSE_MODAL';

export const LOGIN = 'LOGIN';

export const onOpenModal = () => ({
  type: OPEN_MODAL,
  isModalOpened: true,
});

export const onCloseModal = () => ({
  type: CLOSE_MODAL,
  isModalOpened: false,
});

export const onRegister = (user) => ({
  type: LOGIN,
  isLoggedIn: true,
  payload: user,
});
