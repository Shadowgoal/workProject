export const validation = (user) => {
  const errors = {};
  if (!user.username) {
    errors.username = 'Required';
  } else if (user.username.length < 3) {
    errors.username = 'Username length should be greater than 3';
  }
  if (!user.password) {
    errors.password = 'Required';
  } else if (user.password.length < 6) {
    errors.password = 'Password should have more than 6 symbols';
  }
  return errors;
};

export const blank = () => {};
