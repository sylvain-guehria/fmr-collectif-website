import { methodMustBeImplemented } from '../../utils/abstract';
import UserEntity from './UserEntity';
import { User } from './userType';

class UserRepository {
  async getById(id: string): Promise<User> {
    throw methodMustBeImplemented(id);
  }

  async add(user: UserEntity): Promise<unknown> {
    throw methodMustBeImplemented(user);
  }
}

export default UserRepository;
