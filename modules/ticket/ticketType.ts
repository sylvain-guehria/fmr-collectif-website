export interface Ticket {
  uid: string;
  date: number;
  place: string;
  label: string;
  quantity: number;
  price: number;
  numberTotalSell: number;
  lastBuyDate: number;
  isDeleted: boolean;
}
