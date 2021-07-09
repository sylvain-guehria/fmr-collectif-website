export interface User {
  loggedIn?: boolean;
  email?: string;
  pseudo?: string;
  provider?: string;
  uid?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  language?: string;
  phoneNumber?: string;
  role?: string;
  creationDate?: number;
  lastLogin?: number;
}

export interface Users {
  user?: User;
  users?: User[];
}

export enum userEnum {
  LOGGEDIN = 'loggedIn',
  EMAIL = 'email',
  MESSAGE = 'messages',
  PSEUDO = 'pseudo',
  ROLES = 'roles',
  UID = 'uid',
  PASSWORD = 'password',
}

export enum ROLES {
  SUPERADMIN = 'superadmin',
  ADMIN = 'admin',
  USER = 'user',
}

export enum PROVIDERS {
  FACEBOOK = 'facebook',
  GOOGLE = 'google',
  EMAIL = 'email',
}
