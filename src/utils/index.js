export const emailValid = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;

export const emailValidation = (user) => {
  if (user.match(emailValid)) {
    return true
  }
};