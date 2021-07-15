import { methodMustBeImplemented } from '../../utils/abstract';
import ItemEntity from './ItemEntity';
import { Item } from './itemType';

/**
 * @abstract
 */
class ItemRepository {
  constructor() {
    if (this.constructor === ItemRepository) {
      throw new TypeError(
        'Abstract class "ProfileRepository" cannot be instantiated, it can only be extended.'
      );
    }
  }

  async getById(uid: string): Promise<ItemEntity> {
    throw methodMustBeImplemented(uid);
  }

  async deleteById(uid: string): Promise<void> {
    throw methodMustBeImplemented(uid);
  }

  async add(item: Item): Promise<ItemEntity> {
    throw methodMustBeImplemented(item);
  }

  async getAll(): Promise<ItemEntity[]> {
    throw methodMustBeImplemented();
  }

  async update(item: ItemEntity): Promise<void> {
    throw methodMustBeImplemented(item);
  }
}

export default ItemRepository;
