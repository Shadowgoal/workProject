import instance from './index';

export const likeRequest = (track) => {
  const data = instance.put('/liketrack', track).then((response) => response.data);
  return data;
};

export const dislikeRequest = (track) => {
  const data = instance.put('/disliketrack', track).then((response) => response.data);
  return data;
};

export const signInRequest = (values) => {
  const data = instance.post('/signin', values)
    .then((response) => response.data)
    .catch(() => ({ error: true, message: 'Incorrect password or email' }));
  return data;
};

export const signUpRequest = (values) => {
  const data = instance.post('/signup', values)
    .then((response) => response.data)
    .catch(() => ({ error: true, message: 'Password or email is already exists' }));
  return data;
};

export const logOutRequest = () => {
  const data = instance.post('/logout')
    .then((response) => response.data)
    .catch(() => ({ error: true, message: 'Something went wrong' }));
  return data;
};

export const tracksRequest = () => {
  const data = instance.get('/tracks').then((response) => response.data);
  return data;
};
