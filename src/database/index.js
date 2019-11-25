import Dexie from 'dexie';

export const usersDB = new Dexie('usersDB');

export const tracksDB = new Dexie('tracksDB');

usersDB.version(1).stores({ users: '++id, username, email, password, likedTracksIds, listenedTracksIds' });

tracksDB.version(1).stores({ track: '++id, src, artist, name, cover' });
