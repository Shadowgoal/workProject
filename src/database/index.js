import Dexie from 'dexie';

export const usersDB = new Dexie('usersDB');

usersDB.version(1).stores({ users: '++id' });

export const tracksDB = new Dexie('tracksDB');

