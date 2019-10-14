import { emailValidation } from 'utils';

export const validation = (user) => {
  const errors = {};
  if (!user.username) {
    errors.username = 'Required';
  } else if (user.username.length < 3) {
    errors.username = 'Username length should be greater than 3';
  }
  if (!user.email) {
    errors.email = 'Reguired';
  } else if (!emailValidation(user.email)) {
    errors.email = 'Invalid email';
  }
  if (!user.password) {
    errors.password = 'Required';
  } else if (user.password.length < 6) {
    errors.password = 'Password should have more than 6 symbols';
  }
  if (!user.confirm) {
    errors.confirm = 'Required';
  } else if (user.confirm !== user.password) {
    errors.confirm = 'Must match';
  }
  console.log(errors);
  return errors;
};

export const blank = () => {};
