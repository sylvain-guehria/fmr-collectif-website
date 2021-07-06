import { Item } from './itemType';

class ItemEntity implements Item {
  uid;
  creationDate;
  lastLogin;

  static new({ ...arg }: { [x: string]: unknown }): ItemEntity {
    return new ItemEntity({
      creationDate: Date.now(),
      lastLogin: Date.now(),
      ...arg,
    });
  }

  constructor(item: Item) {
    this.uid = item.uid || '';
    this.creationDate = item.creationDate || 0;
    this.lastLogin = item.lastLogin || 0;
  }

  getId(): string {
    return this.uid || '';
  }

  initCreationDate(): ItemEntity {
    this.creationDate = Date.now();
    return this;
  }

  getCreationDate(): number {
    return this.creationDate || 0;
  }
}

export default ItemEntity;
