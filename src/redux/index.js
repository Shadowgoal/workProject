import { createStore } from 'redux';

const initialState = {
  isModalOpened: false,
  isLoggedIn: false,
  user: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        isModalOpened: true,
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        isModalOpened: false,
      };
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
