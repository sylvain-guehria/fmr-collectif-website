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
  history?: History;
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

export enum HISTORY_TYPE {
  ITEMS = 'items',
  TICKETS = 'tickets',
  SUBSCRIBTIONS = 'subscriptions',
}

export type History = {
  [HISTORY_TYPE.ITEMS]?: ItemHistory[];
  [HISTORY_TYPE.TICKETS]?: TicketHistory[];
  [HISTORY_TYPE.SUBSCRIBTIONS]?: SubscriptionHistory[];
};

type ItemHistory = {
  itemId: string;
  date: number;
  quantity: number;
};

type TicketHistory = {
  ticketId: string;
  date: number;
  quantity: number;
};

type SubscriptionHistory = {
  subscriptionId: string;
  date: number;
};
