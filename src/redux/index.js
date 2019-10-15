import { createStore } from 'redux';
import instance from 'http/index';

let initialState = {
  isModalOpened: false,
  isLoggedIn: false,
  user: {
    username: '',
    email: '',
    password: '',
    confirm: '',
  },
};

instance.get('/tracks')
  .then((response) => {
    console.log(response.data);
    initialState = response.data;
    console.log(initialState);
  });

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
