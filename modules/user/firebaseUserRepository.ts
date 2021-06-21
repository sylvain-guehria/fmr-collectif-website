import UserRepository from './userRepository';
import { User } from './userType';
import axios from 'axios';
import logger from '../logger/logger';
import UserEntity from './UserEntity';

class FirebaseUserRepository extends UserRepository {
  constructor() {
    super();
  }

  async getById(id: string): Promise<User> {
    logger.info('get user in db with id: ', id);
    const response = await axios.get(`/api/user/${id}`);
    const {
      uid,
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
      id: uid,
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

  async add(user: UserEntity): Promise<unknown> {
    const res = await axios.post('/api/user', {
      uid: user.id,
      email: user.email,
      pseudo: user.pseudo,
      firstName: user.firstName,
      lastName: user.lastName,
      language: user.language,
      phoneNumber: user.phoneNumber,
      role: user.role,
      creationDate: user.creationDate,
      lastLogin: user.lastLogin,
    });
    return res;
  }
}

export default FirebaseUserRepository;
