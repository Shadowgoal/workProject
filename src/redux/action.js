export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

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