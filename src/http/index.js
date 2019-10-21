import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
});

const mock = new MockAdapter(instance);
mock.onGet('/tracks').reply(() => new Promise((resolve) => {
  setTimeout(() => {
    resolve([200, {
      tracks: [
        {
          id: 1,
          src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/wwy.mp3',
          artist: 'Zivert',
          name: 'Credo',
          duration: 184,
        },
        {
          id: 2,
          src: 'music/Atl-Serpantin.mp3',
          artist: 'ATL',
          name: 'Serpantin',
          duration: 169,
        },
      ],
    }]);
  }, 10);
}));

mock.onPost('/signup').reply((config) => new Promise((resolve) => {
  setTimeout(() => {
    resolve([200, {
      user: {
        ...JSON.parse(config.data),
      },
      token: 'asdasdasd',
    }]);
  }, 3000);
}));

mock.onPost('/logout').reply(() => new Promise((resolve) => {
  setTimeout(() => {
    resolve([200]);
  }, 3000);
}));

mock.onPost('/signin').reply((config) => new Promise((resolve) => {
  setTimeout(() => {
    resolve([200, {
      user: {
        ...JSON.parse(config.data),
      },
      token: 'asdasdasd',
    }]);
  }, 3000);
}));

export default instance;
