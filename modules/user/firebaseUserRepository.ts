import UserRepository from './userRepository';
import { rolesEnum, User } from './userType';
import axios from 'axios';
import logger from '../logger/logger';
import UserEntity from './UserEntity';
import { v4 as uuidV4 } from 'uuid';

class FirebaseUserRepository extends UserRepository {
  constructor() {
    super();
  }

  async getById(uid: string): Promise<User> {
    logger.info('get user in db with uid: ', uid);
    const response = await axios.get(`/api/user/${uid}`);
    const {
      email,
      pseudo,
      firstName,
      lastName,
      language,
      phoneNumber,
      role,
      creationDate,
      lastLogin,
    } = response.data;

    return new UserEntity({
      uid: uid,
      email: email,
      pseudo: pseudo,
      firstName: firstName,
      lastName: lastName,
      language: language,
      phoneNumber: phoneNumber,
      role: role,
      creationDate: creationDate,
      lastLogin: lastLogin,
    });
  }

  async add(user: User): Promise<unknown> {
    const res = await axios.post('/api/user', {
      uid: user.uid || uuidV4(),
      email: user.email,
      pseudo: user.pseudo,
      firstName: user.firstName,
      lastName: user.lastName,
      language: user.language,
      phoneNumber: user.phoneNumber,
      role: user.role || rolesEnum.USER,
      creationDate: user.creationDate,
      lastLogin: user.lastLogin,
    });
    return res;
  }

  async getAll(): Promise<User[]> {
    logger.info('get all users in db');
    const response = await axios.get('/api/user/getAll');

    return response.data.map(
      (user: UserEntity) =>
        new UserEntity({
          uid: user.uid,
          email: user.email,
          pseudo: user.pseudo,
          firstName: user.firstName,
          lastName: user.lastName,
          language: user.language,
          phoneNumber: user.phoneNumber,
          role: user.role,
          creationDate: user.creationDate,
          lastLogin: user.lastLogin,
        })
    );
  }
}

export default FirebaseUserRepository;
