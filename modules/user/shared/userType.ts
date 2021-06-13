export interface User {
  loggedIn?: boolean;
  email?: string | null;
  pseudo?: string;
  roles?: string[];
  uid?: string;
  displayName?: string;
  password?: string;
}

export interface Users {
  user?: User;
  users?: User[];
}
