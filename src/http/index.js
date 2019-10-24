import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as Atl from '../music/Atl-Serpantin.mp3';
import * as Zivert from '../music/Zivert-Credo.mp3';
import * as AtlCover from '../assets/TrackIcons/Atl-Serpantin.jpg';
import * as ZivertCover from '../assets/TrackIcons/Zivert-Credo.jpg';

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
          src: Zivert,
          artist: 'Zivert',
          name: 'Credo',
          duration: 184,
          cover: ZivertCover,
          liked: false,
          listened: false,
        },
        {
          id: 2,
          src: Atl,
          artist: 'ATL',
          name: 'Serpantin',
          duration: 169,
          cover: AtlCover,
          liked: false,
          listened: false,
        },
      ],
    }]);
  }, 10);
}));

mock.onPut('/liketrack').reply((config) => new Promise((resolve) => {
  setTimeout(() => {
    resolve([200, {
      likedTracks: {
        ...JSON.parse(config.data),
        liked: true,
      },
    }]);
  }, 10);
}));

mock.onPut('/disliketrack').reply((config) => new Promise((resolve) => {
  setTimeout(() => {
    resolve([200, {
      likedTracks: {
        ...JSON.parse(config.data),
        liked: false,
      },
    }]);
  }, 10);
}));

mock.onPost('/logout').reply(() => new Promise((resolve) => {
  setTimeout(() => {
    resolve([200], {
      user: {
        likedTracks: [],
        listenedTracks: [],
      },
    });
  }, 1000);
}));

mock.onPost('/signin').reply((config) => new Promise((resolve) => {
  setTimeout(() => {
    resolve([200, {
      user: {
        ...JSON.parse(config.data),
        likedTracks: [],
        listenedTracks: [],
      },
      token: 'asdasdasd',
    }]);
  }, 1000);
}));

mock.onPost('/signup').reply((config) => new Promise((resolve) => {
  setTimeout(() => {
    resolve([200, {
      user: {
        ...JSON.parse(config.data),
        likedTracks: [],
        listenedTracks: [],
      },
      token: 'asdasdasd',
    }]);
  }, 1000);
}));

export default instance;
