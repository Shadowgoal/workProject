import Dexie from 'dexie';

export const usersDB = new Dexie('usersDB');

usersDB.version(1).stores({ users: '++id, username, email, password, confirm' });

export const tracksDB = new Dexie('tracksDB');

