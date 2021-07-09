import UserRepository from './userRepository';
import { ROLES, User } from './userType';
import axios from 'axios';
import logger from '../logger/logger';
import UserEntity from './UserEntity';
import { v4 as uuidV4 } from 'uuid';

class FirebaseUserRepository extends UserRepository {
  constructor() {
    super();
  }

  async getById(uid: string): Promise<UserEntity> {
    logger.info('get user in db with uid: ', uid);
    const response = await axios.get(`/user/${uid}`);
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
      provider,
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
      provider: provider,
    });
  }

  async add(user: User): Promise<unknown> {
    logger.info('add user in db with uid: ', user.uid);
    const res = await axios.post('/user/save', {
      uid: user.uid || uuidV4(),
      email: user.email || '',
      provider: user.provider || '',
      pseudo: user.pseudo || '',
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      language: user.language || '',
      phoneNumber: user.phoneNumber || '',
      role: user.role || ROLES.USER,
      creationDate: Date.now(),
      lastLogin: Date.now(),
    });
    return res;
  }

  async getAll(): Promise<UserEntity[]> {
    logger.info('get all users in db');
    const response = await axios.get('/user/getAll');
    return response.data.map(
      (user: UserEntity) =>
        new UserEntity({
          uid: user.uid,
          email: user.email,
          provider: user.provider,
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

  async update(user: UserEntity): Promise<void> {
    logger.info('update user uid: ', user.uid);
    await axios.put(`/user/${user.uid}`, {
      uid: user.getId(),
      email: user.getEmail(),
      provider: user.getProvider(),
      pseudo: user.getPseudo(),
      firstName: user.getFirstName(),
      lastName: user.getLastName(),
      language: user.getLanguage(),
      phoneNumber: user.getPhoneNumber(),
      role: user.getRole(),
      creationDate: user.getCreationDate(),
      lastLogin: user.getLastLogin(),
    });
  }
}

export default FirebaseUserRepository;
