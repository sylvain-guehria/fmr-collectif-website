import { Item } from '../modules/item/itemType';
import ItemEntity from '../modules/item/ItemEntity';
import itemServiceDi from '../modules/item/itemService';
import { StorageInterface } from '../firebase/modules/storage';

export const saveItem =
  (itemServiceDi: itemServiceDi, storageFunctions: StorageInterface) =>
  async (item: Item, currentFile: File | null): Promise<string> => {
    const {
      uid,
      label,
      gender,
      size,
      photoLink,
      color,
      quantity,
      price,
      numberTotalSell,
      lastBuyDate,
      isDeleted,
    } = item;
    let downloadUrl = '';

    if (currentFile) {
      Object.defineProperty(currentFile, 'name', {
        writable: true,
        value: uid,
      });
      downloadUrl = await storageFunctions.handleUpload('stocks', currentFile);
    }

    const updatedItem = ItemEntity.new({
      uid,
      label,
      gender,
      size,
      photoLink: downloadUrl ? downloadUrl : photoLink,
      color,
      quantity,
      price,
      numberTotalSell,
      lastBuyDate,
      isDeleted,
    });

    await itemServiceDi.editItem(updatedItem);
    return updatedItem.getPhotoLink();
  };
