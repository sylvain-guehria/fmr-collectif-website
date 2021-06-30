import { methodMustBeImplemented } from '../../utils/abstract';
import UserEntity from './UserEntity';
import { User } from './userType';

/**
 * @abstract
 */
class UserRepository {
  constructor() {
    if (this.constructor === UserRepository) {
      throw new TypeError(
        'Abstract class "ProfileRepository" cannot be instantiated, it can only be extended.'
      );
    }
  }

  async getById(uid: string): Promise<User> {
    throw methodMustBeImplemented(uid);
  }

  async add(user: UserEntity): Promise<unknown> {
    throw methodMustBeImplemented(user);
  }

  async getAll(): Promise<User[]> {
    throw methodMustBeImplemented();
  }
}

export default UserRepository;
