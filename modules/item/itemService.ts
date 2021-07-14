import ItemRepository from './itemRepository';
import ItemEntity from './ItemEntity';

class itemService {
  itemRepository;

  constructor(itemRepository: ItemRepository) {
    this.itemRepository = itemRepository;
  }

  async editItem(item: ItemEntity): Promise<void> {
    return await this.itemRepository.update(item);
  }
}

export default itemService;
