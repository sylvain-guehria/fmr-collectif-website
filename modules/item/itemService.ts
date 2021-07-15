import ItemRepository from './itemRepository';
import ItemEntity from './ItemEntity';
import { Item } from './itemType';

class itemService {
  itemRepository;

  constructor(itemRepository: ItemRepository) {
    this.itemRepository = itemRepository;
  }

  async editItem(item: ItemEntity): Promise<void> {
    return await this.itemRepository.update(item);
  }

  async createItem(item: Item): Promise<ItemEntity> {
    return await this.itemRepository.add(item);
  }

  async deleteItem(uid: string): Promise<void> {
    return await this.itemRepository.deleteById(uid);
  }
}

export default itemService;
