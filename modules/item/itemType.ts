export interface Item {
  uid: string;
  label: string;
  gender: genderEnum.HOMME | genderEnum.FEMME | genderEnum.UNISEX | string;
  size: string;
  photoLink: string;
  color: string;
  quantity: number;
  price: number;
  numberTotalSell: number;
  lastBuyDate: number;
  isDeleted: boolean;
}

export enum itemEnum {
  UID = 'uid',
}

export enum genderEnum {
  HOMME = 'Homme',
  FEMME = 'Femme',
  UNISEX = 'Unisex',
}
