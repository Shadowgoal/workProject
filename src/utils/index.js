export const emailValid = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;

export const emailValidation = (user) => user.match(emailValid);
