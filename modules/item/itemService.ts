import ItemRepository from './itemRepository';
import ItemEntity from './ItemEntity';
import { Item } from './itemType';
import { StorageInterface } from '../../firebase/modules/storage';

class itemService {
  itemRepository;
  storageFunctions;

  constructor(itemRepository: ItemRepository, storageFunctions: StorageInterface) {
    this.itemRepository = itemRepository;
    this.storageFunctions = storageFunctions;
  }

  async editItem(item: ItemEntity): Promise<void> {
    return await this.itemRepository.update(item);
  }

  async createItem(item: Item): Promise<ItemEntity> {
    return await this.itemRepository.add(item);
  }

  async deleteItem(uid: string): Promise<void> {
    await this.storageFunctions.handleDelete('stocks', uid);
    return await this.itemRepository.deleteById(uid);
  }

  async buyNumberOfItems(item: ItemEntity, quantityBought: number): Promise<void> {
    item.buyNumberOfItems(quantityBought);
    return await this.itemRepository.update(item);
  }
}

export default itemService;
