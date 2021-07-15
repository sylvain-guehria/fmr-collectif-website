/* eslint-disable complexity */
import { ROLES, User } from './userType';

class UserEntity implements User {
  loggedIn;
  email;
  pseudo;
  uid;
  password;
  firstName;
  lastName;
  language;
  phoneNumber;
  role;
  creationDate;
  lastLogin;
  provider;

  static new(user: User): UserEntity {
    return new UserEntity({
      creationDate: Date.now(),
      lastLogin: Date.now(),
      ...user,
    });
  }

  constructor(user: User) {
    this.loggedIn = user.loggedIn || false;
    this.email = user.email || '';
    this.provider = user.provider || '';
    this.pseudo = user.pseudo || '';
    this.uid = user.uid || '';
    this.password = user.password || '';
    this.firstName = user.firstName || '';
    this.lastName = user.lastName || '';
    this.language = user.language || '';
    this.phoneNumber = user.phoneNumber || '';
    this.role = user.role || '';
    this.creationDate = user.creationDate || 0;
    this.lastLogin = user.lastLogin || 0;
  }

  getId(): string {
    return this.uid;
  }

  getProvider(): string {
    return this.provider;
  }

  setRole(role: string): UserEntity {
    this.role = role;
    return this;
  }

  getRole(): string {
    return this.role;
  }

  setFirstName(firstName: string): UserEntity {
    this.firstName = firstName;
    return this;
  }

  getFirstName(): string {
    return this.firstName;
  }

  setLastName(lastName: string): UserEntity {
    this.lastName = lastName;
    return this;
  }

  getLastName(): string {
    return this.lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getLanguage(): string {
    return this.language;
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
    return this.email;
  }

  getPseudo(): string {
    return this.pseudo;
  }

  setPhoneNumber(phoneNumber: string): UserEntity {
    this.phoneNumber = phoneNumber;
    return this;
  }

  getPhoneNumber(): string {
    return this.phoneNumber;
  }

  initCreationDate(): UserEntity {
    this.creationDate = Date.now();
    return this;
  }

  getCreationDate(): number {
    return this.creationDate;
  }

  getLastLogin(): number {
    return this.lastLogin;
  }

  updateLastLogin(): UserEntity {
    this.lastLogin = Date.now();
    return this;
  }

  isAdmin(): boolean {
    return this.getRole() === ROLES.ADMIN;
  }

  isSuperAdmin(): boolean {
    return this.getRole() === ROLES.SUPERADMIN;
  }
}

export default UserEntity;
