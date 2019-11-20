import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { usersDB } from 'database';

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
          listened: false,
        },
        {
          id: 2,
          src: Atl,
          artist: 'ATL',
          name: 'Serpantin',
          duration: 169,
          cover: AtlCover,
          listened: false,
        },
      ],
    }]);
  }, 10);
}));

mock.onPut('/liketrack').reply((config) => new Promise((resolve) => {
  setTimeout(() => {
    const userData = JSON.parse(config.data);
    usersDB.users.get({ username: userData.username }, (user) => {
      usersDB.users.update(user.id, {
        likedTracksIds: [
          ...user.likedTracksIds.filter((el) => el !== userData.track.id),
          userData.track.id,
        ],
      });
    });
    resolve([200]);
  }, 10);
}));

mock.onPut('/disliketrack').reply((config) => new Promise((resolve) => {
  setTimeout(() => {
    const userData = JSON.parse(config.data);
    usersDB.users.get({ username: userData.username }, (user) => {
      usersDB.users.update(user.id, {
        likedTracksIds: [
          ...user.likedTracksIds.filter((el) => el !== userData.track.id),
        ],
      });
    });
    resolve([200]);
  }, 10);
}));

mock.onPut('/tracklistened').reply((config) => new Promise((resolve) => {
  setTimeout(() => {
    const userData = JSON.parse(config.data);
    usersDB.users.get({ username: userData.username }, (user) => {
      usersDB.users.update(user.id, {
        listenedTracksIds: [
          ...user.listenedTracksIds.filter((el) => el !== userData.currentTrack.id),
          userData.currentTrack.id,
        ],
      });
    });
    resolve([200]);
  }, 10);
}));

mock.onGet('/getuser').reply(({ params }) => new Promise((resolve) => {
  setTimeout(() => {
    usersDB.users.get({ username: params.username }, (user) => {
      if (user) {
        resolve([200, {
          user: {
            username: user.username,
          },
        }]);
      }
    });
  }, 10);
}));

mock.onGet('/getlistened').reply(({ params }) => new Promise((resolve) => {
  setTimeout(() => {
    usersDB.users.get({ username: params.username || 'abc' }, (user) => {
      if (user) {
        resolve([200, {
          listenedTracksIds: [
            ...user.listenedTracksIds,
          ],
        }]);
      }
    });
  }, 10);
}));

mock.onGet('/getliked').reply(({ params }) => new Promise((resolve) => {
  setTimeout(() => {
    usersDB.users.get({ username: params.username || 'abc' }, (user) => {
      if (user) {
        resolve([200, {
          likedTracksIds: [
            ...user.likedTracksIds,
          ],
        }]);
      }
    });
  }, 10);
}));

mock.onPost('/logout').reply(() => new Promise((resolve) => {
  setTimeout(() => {
    resolve([200], {
      user: {
        likedTracksIds: [],
        listenedTracksIds: [],
      },
    });
  }, 1000);
}));

mock.onPost('/signin').reply((config) => new Promise((resolve) => {
  setTimeout(() => {
    const userData = JSON.parse(config.data);
    usersDB.users.get({ username: userData.username }, (user) => {
      if (user && user.username === userData.username && user.password === userData.password) {
        resolve([200, {
          user: {
            username: user.username,
            likedTracksIds: [
              ...user.likedTracksIds,
            ],
            listenedTracksIds: [
              ...user.listenedTracksIds,
            ],
          },
          token: 'asdasdasd',
        }]);
      } else {
        resolve([500]);
      }
    });
  }, 1000);
}));

mock.onPost('/signup').reply((config) => new Promise((resolve) => {
  setTimeout(() => {
    const userData = JSON.parse(config.data);
    usersDB.users.get({ username: userData.username }, (user) => {
      if (!user) {
        usersDB.users.add({
          username: userData.username,
          email: userData.email,
          password: userData.password,
          likedTracksIds: [],
          listenedTracksIds: [],
        }).then(usersDB.users.get({ username: userData.username }, (newUser) => {
          resolve([200, {
            user: {
              username: newUser.username,
              likedTracksIds: newUser.likedTracksIds,
              listenedTracksIds: newUser.listenedTracksIds,
            },
            token: 'asdasdasd',
          }]);
        }));
      } else {
        resolve([500]);
      }
    });
  }, 1000);
}));

export default instance;
