import instance from './index';

export const likeRequest = (requestData) => {
  const data = instance.put('/liketrack', requestData).then((response) => response.data);
  return data;
};

export const dislikeRequest = (requestData) => {
  const data = instance.put('/disliketrack', requestData).then((response) => response.data);
  return data;
};

export const listenedTrackRequest = (requestData) => {
  const data = instance.put('/tracklistened', requestData).then((responce) => responce.data);
  return data;
};

export const getUserRequest = (username) => {
  const data = instance.get('/getuser', {
    params: {
      username,
    },
  }).then((response) => response.data);
  return data;
};

export const getListenedRequest = (username) => {
  const data = instance.get('/getlistened', {
    params: {
      username,
    },
  }).then((response) => response.data);
  return data;
};

export const getLikedRequest = (username) => {
  const data = instance.get('/getliked', {
    params: {
      username,
    },
  }).then((response) => response.data);
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

export const uploadTrackRequest = (track) => {
  const data = instance.post('/uploadtrack', track)
    .then((response) => response.data);
  return data;
};
