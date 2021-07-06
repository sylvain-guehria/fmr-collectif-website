import { methodMustBeImplemented } from '../../utils/abstract';
import ItemEntity from './ItemEntity';

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

  async getById(uid: string): Promise<ItemEntity> {
    throw methodMustBeImplemented(uid);
  }

  async add(item: ItemEntity): Promise<unknown> {
    throw methodMustBeImplemented(item);
  }

  async getAll(): Promise<ItemEntity[]> {
    throw methodMustBeImplemented();
  }
}

export default UserRepository;
