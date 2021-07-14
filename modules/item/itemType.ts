export interface Item {
  uid?: string;
  label?: string;
  size?: string;
  photoLink?: string;
  color?: string;
  quantity?: number;
  price?: number;
  numberTotalSell?: number;
  lastBuyDate?: number;
  isDeleted?: boolean;
}

export enum itemEnum {
  UID = 'uid',
}
