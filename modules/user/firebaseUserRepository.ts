import UserRepository from './userRepository';
// import { User } from './userType';
// import axios from 'axios';
// import logger from '../logger/logger';

class FirebaseUserRepository extends UserRepository {
  constructor() {
    super();
  }

  //   async getById(id: string): Promise<User> {
  //     logger.info('get user in db with id: ', id);
  //     const firebaseUser = await axios.get(`/api/user/${id}`);

  //     logger.info('Respons axios firestore: ', user);

  //     const user = {
  //       loggedIn: false,
  //       email: firebaseUser.email,
  //       pseudo: firebaseUser.pseudo,
  //       id: firebaseUser.id,
  //       displayName: firebaseUser.displayName,
  //       password: firebaseUser.password,
  //       firstName: firebaseUser.firstName,
  //       lastName: firebaseUser.lastName,
  //       language: firebaseUser.language,
  //       phoneNumber: firebaseUser.phoneNumber,
  //       role: firebaseUser.role,
  //       creationDate: firebaseUser.creationDate,
  //       lastLogin: firebaseUser.lastLogin,
  //     };

  //     return user;
  //   }
}

export default FirebaseUserRepository;
