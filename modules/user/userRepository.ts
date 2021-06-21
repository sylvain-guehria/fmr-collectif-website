import { methodMustBeImplemented } from '../../utils/abstract';
import { User } from './userType';

class UserRepository {
  async getById(id: string): Promise<User> {
    throw methodMustBeImplemented(id);
  }
}

export default UserRepository;
