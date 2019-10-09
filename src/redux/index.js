import { createStore } from 'redux';

const initialState = {
  isModalOpened: false,
  isValid: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_MODAL' :
      return {
        ...state,
        isModalOpened: true,
    }
    case 'CLOSE_MODAL' :
      return {
        ...state,
        isModalOpened: false,
      }
    case 'ValidationUsername' :
      return {
        ...state,
        isValid: true
      }
    default:
      return state
  }
}

const store = createStore(reducer);

export default store;