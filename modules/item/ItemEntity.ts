import { Item } from './itemType';

class ItemEntity implements Item {
  uid;
  label;
  gender;
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
    this.gender = item.gender || '';
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

  getGender(): string {
    return this.gender;
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

  hasEnoughQuantityInStock(numberItemsBought: number): boolean {
    return this.quantity - numberItemsBought >= 0;
  }

  buyNumberOfItems(numberItemsBought: number): void {
    this.quantity = this.quantity - numberItemsBought;
    this.numberTotalSell = this.numberTotalSell + numberItemsBought;
    this.lastBuyDate = Date.now();
  }
}

export default ItemEntity;
