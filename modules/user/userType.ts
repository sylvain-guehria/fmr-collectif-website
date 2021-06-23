export interface User {
  loggedIn?: boolean;
  email?: string;
  pseudo?: string;
  uid?: string;
  displayName?: string;
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
  DISPLAYNAME = 'displayName',
  PASSWORD = 'password',
}

export enum rolesEnum {
  SUPERADMIN = 'superadmin',
  ADMIN = 'admin',
  USER = 'user',
}
