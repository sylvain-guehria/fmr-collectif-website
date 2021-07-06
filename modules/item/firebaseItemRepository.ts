import ItemRepository from './itemRepository';
import axios from 'axios';
import logger from '../logger/logger';
import ItemEntity from './ItemEntity';
import { v4 as uuidV4 } from 'uuid';

class FirebaseItemRepository extends ItemRepository {
  constructor() {
    super();
  }

  async getById(uid: string): Promise<ItemEntity> {
    logger.info('get item in db with uid: ', uid);
    const response = await axios.get(`/item/${uid}`);
    const { creationDate, lastLogin } = response.data;

    return new ItemEntity({
      uid: uid,
      creationDate: creationDate,
      lastLogin: lastLogin,
    });
  }

  async add(item: ItemEntity): Promise<unknown> {
    logger.info('add item in db with uid: ', item.uid);
    const res = await axios.post('/item', {
      uid: item.uid || uuidV4(),
      creationDate: item.creationDate,
      lastLogin: item.lastLogin,
    });
    return res;
  }

  async getAll(): Promise<ItemEntity[]> {
    logger.info('get all items in db');
    const response = await axios.get('/item/getAll');
    return response.data.map(
      (item: ItemEntity) =>
        new ItemEntity({
          uid: item.uid,
          creationDate: item.creationDate,
          lastLogin: item.lastLogin,
        })
    );
  }
}

export default FirebaseItemRepository;
