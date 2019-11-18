export const setAuth = (data) => {
  localStorage.setItem('username', data.user.username);
  localStorage.setItem('authToken', data.token);
};

export const getAuth = (data) => {
  localStorage.setItem('username', data.user.username);
  localStorage.setItem('authToken', data.token);
};

export const removeAuth = () => {
  localStorage.removeItem('username');
  localStorage.removeItem('authToken');
};

export const getUsername = () => localStorage.getItem('username');

export const getToken = () => localStorage.getItem('authToken');
