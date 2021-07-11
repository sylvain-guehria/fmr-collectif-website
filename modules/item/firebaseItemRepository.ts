import ItemRepository from './itemRepository';
import axios from 'axios';
import logger from '../logger/logger';
import ItemEntity from './ItemEntity';
import { v4 as uuidV4 } from 'uuid';
import { Item } from './itemType';

class FirebaseItemRepository extends ItemRepository {
  constructor() {
    super();
  }

  async getById(uid: string): Promise<ItemEntity> {
    logger.info('get item in db with uid: ', uid);
    const response = await axios.get(`/item/${uid}`);
    const {
      label,
      size,
      photoLink,
      color,
      quantity,
      price,
      numberTotalSell,
      lastBuyDate,
      isDeleted,
    } = response.data;

    return new ItemEntity({
      uid: uid,
      label,
      size,
      photoLink,
      color,
      quantity,
      price,
      numberTotalSell,
      lastBuyDate,
      isDeleted,
    });
  }

  async add(item: Item): Promise<unknown> {
    logger.info('add item in db with uid: ', item.uid);
    const res = await axios.post('/item', {
      uid: item.uid || uuidV4(),
      label: item.label || '',
      size: item.size || '',
      photoLink: item.photoLink || '',
      color: item.color || '',
      quantity: item.quantity || 0,
      price: item.price || 0,
      numberTotalSell: item.numberTotalSell || 0,
      lastBuyDate: item.lastBuyDate || 0,
      isDeleted: item.isDeleted || false,
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
          label: item.label,
          size: item.size,
          photoLink: item.photoLink,
          color: item.color,
          quantity: item.quantity,
          price: item.price,
          numberTotalSell: item.numberTotalSell,
          lastBuyDate: item.lastBuyDate,
          isDeleted: item.isDeleted,
        })
    );
  }

  async update(item: ItemEntity): Promise<void> {
    logger.info('update item uid: ', item.uid);
    await axios.put(`/item/${item.uid}`, {
      uid: item.getId(),
      label: item.getLabel(),
      size: item.getSize(),
      photoLink: item.getPhotoLink(),
      color: item.getColor(),
      quantity: item.getQuantity(),
      price: item.getPrice(),
      numberTotalSell: item.getNumberTotalSell(),
      lastBuyDate: item.getLastBuyDate(),
      isDeleted: item.isItemDeleted(),
    });
  }
}

export default FirebaseItemRepository;
