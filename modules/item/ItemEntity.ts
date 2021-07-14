import { Item } from './itemType';

class ItemEntity implements Item {
  uid;
  label;
  size;
  photoLink;
  color;
  quantity;
  price;
  numberTotalSell;
  lastBuyDate;
  isDeleted;

  static new(item: Item): ItemEntity {
    return new ItemEntity({
      ...item,
    });
  }

  constructor(item: Item) {
    this.uid = item.uid || '';
    this.label = item.label || '';
    this.size = item.size || '';
    this.photoLink = item.photoLink || '';
    this.color = item.color || '';
    this.quantity = item.quantity || 0;
    this.price = item.price || 0;
    this.numberTotalSell = item.numberTotalSell || 0;
    this.lastBuyDate = item.lastBuyDate || 0;
    this.isDeleted = item.isDeleted || false;
  }

  getId(): string {
    return this.uid;
  }

  getLabel(): string {
    return this.label;
  }

  isItemDeleted(): boolean {
    return this.isDeleted;
  }

  getSize(): string {
    return this.size;
  }

  getPhotoLink(): string {
    return this.photoLink;
  }

  getColor(): string {
    return this.color;
  }

  getQuantity(): number {
    return this.quantity;
  }

  getPrice(): number {
    return this.price;
  }

  getNumberTotalSell(): number {
    return this.numberTotalSell;
  }

  getLastBuyDate(): number {
    return this.lastBuyDate;
  }
}

export default ItemEntity;
