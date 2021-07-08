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

  static new(item: Item): ItemEntity {
    return new ItemEntity({
      uid: item.uid,
      label: item.label,
      size: item.size,
      photoLink: item.photoLink,
      color: item.color,
      quantity: item.quantity,
      price: item.price,
      numberTotalSell: item.numberTotalSell,
      lastBuyDate: item.lastBuyDate,
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
  }

  getId(): string {
    return this.uid;
  }

  getLabel(): string {
    return this.label;
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
