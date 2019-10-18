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
          src: 'music/Zivert-Credo.mp3',
          artist: 'Zivert',
          name: 'Credo',
        },
        {
          id: 2,
          src: 'music/Atl-Serpantin.mp3',
          artist: 'ATL',
          name: 'Serpantin',
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
