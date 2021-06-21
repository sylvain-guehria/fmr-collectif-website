/* eslint-disable complexity */
import { uuid } from 'uuidv4';
import { rolesEnum, User } from './userType';

class UserEntity implements User {
  loggedIn;
  email;
  pseudo;
  id;
  displayName;
  password;
  firstName;
  lastName;
  language;
  phoneNumber;
  role;
  creationDate;
  lastLogin;

  static new({ ...arg }: { [x: string]: unknown }): UserEntity {
    return new UserEntity({
      id: uuid(),
      creationDate: Date.now(),
      lastLogin: Date.now(),
      ...arg,
    });
  }

  constructor(user: User) {
    this.loggedIn = user.loggedIn || false;
    this.email = user.email || '';
    this.pseudo = user.pseudo || '';
    this.id = user.id || '';
    this.displayName = user.displayName || '';
    this.password = user.password || '';
    this.firstName = user.firstName || '';
    this.lastName = user.lastName || '';
    this.language = user.language || '';
    this.phoneNumber = user.phoneNumber || '';
    this.role = user.role || '';
    this.creationDate = user.creationDate || 0;
    this.lastLogin = user.lastLogin || 0;
  }

  generateId(): UserEntity {
    this.id = uuid();
    return this;
  }

  getId(): string {
    return this.id || '';
  }

  setRole(role: string): UserEntity {
    this.role = role;
    return this;
  }

  getRole(): string {
    return this.role || '';
  }

  setFirstName(firstName: string): UserEntity {
    this.firstName = firstName;
    return this;
  }

  getFirstName(): string {
    return this.firstName || '';
  }

  setLastName(lastName: string): UserEntity {
    this.lastName = lastName;
    return this;
  }

  getLastName(): string {
    return this.lastName || '';
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  setEmail(email: string): UserEntity {
    this.email = this._sanitizeEmail(email);
    return this;
  }

  _sanitizeEmail(email: string): string {
    return email
      .toLowerCase()
      .normalize('NFD')
      .replace(/\s/g, '')
      .replace(/[\u0300-\u036f]/g, '');
  }

  getEmail(): string {
    return this.email || '';
  }

  setPhoneNumber(phoneNumber: string): UserEntity {
    this.phoneNumber = phoneNumber;
    return this;
  }

  getPhoneNumber(): string {
    return this.phoneNumber || '';
  }

  initCreationDate(): UserEntity {
    this.creationDate = Date.now();
    return this;
  }

  getCreationDate(): number {
    return this.creationDate || 0;
  }

  isAdmin(): boolean {
    return this.getRole() === rolesEnum.ADMIN;
  }

  isSuperAdmin(): boolean {
    return this.getRole() === rolesEnum.SUPERADMIN;
  }
}

export default UserEntity;