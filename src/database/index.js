import Dexie from 'dexie';

export const usersDB = new Dexie('usersDB');

usersDB.version(1).stores({ users: '++id, username, email, password, likedTracksIds, listenedTracksIds' });

export const tracksDB = new Dexie('tracksDB');

