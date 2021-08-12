import ItemEntity from '../modules/item/ItemEntity';
import itemServiceDi from '../modules/item/itemService';
import { StorageInterface } from '../firebase/modules/storage';

export const saveItem =
  (itemServiceDi: itemServiceDi, storageFunctions: StorageInterface) =>
  async (
    {
      uid,
      label,
      size,
      photoLink,
      color,
      quantity,
      price,
      numberTotalSell,
    }: {
      uid: string;
      label: string;
      size: string;
      photoLink: string;
      color: string;
      quantity: number;
      price: number;
      numberTotalSell: number;
    },
    currentFile: File | null
  ): Promise<void> => {
    let downloadUrl = '';

    if (currentFile) downloadUrl = await storageFunctions.handleUpload('stocks', currentFile);

    const updatedItem = new ItemEntity({
      uid,
      label,
      size,
      photoLink: downloadUrl ?? photoLink,
      color,
      quantity,
      price,
      numberTotalSell,
    });

    await itemServiceDi.editItem(updatedItem);
  };
