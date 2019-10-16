import { createStore } from 'redux';

const initialState = {
  isLoggedIn: false,
  user: {
    username: '',
    email: '',
    password: '',
    confirm: '',
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
