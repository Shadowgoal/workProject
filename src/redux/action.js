export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const LOGIN = 'LOGIN';

export const onOpenModal = () => {
  return {
    type: OPEN_MODAL,
    isModalOpened: true,
  }
};

export const onCloseModal = () => {
  return {
    type: CLOSE_MODAL,
    isModalOpened: false,
  }
};

export const onRegister = () => {
  return {
    type: LOGIN,
    isLoggedIn: true,
  }
};
