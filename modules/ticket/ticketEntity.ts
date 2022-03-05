import { Ticket } from './ticketType';

class TicketEntity implements Ticket {
  uid: string;
  date: number;
  place: string;
  label: string;
  quantity: number;
  price: number;
  numberTotalSell: number;
  lastBuyDate: number;
  isDeleted: boolean;

  static new(ticket: Ticket): TicketEntity {
    return new TicketEntity({
      ...ticket,
    });
  }

  constructor(ticket: Ticket) {
    this.uid = ticket.uid || '';
    this.date = ticket.date || 0;
    this.label = ticket.label || '';
    this.place = ticket.place || '';
    this.quantity = ticket.quantity || 0;
    this.price = ticket.price || 0;
    this.numberTotalSell = ticket.numberTotalSell || 0;
    this.lastBuyDate = ticket.lastBuyDate || 0;
    this.isDeleted = ticket.isDeleted || false;
  }

  getId(): string {
    return this.uid;
  }

  getLabel(): string {
    return this.label;
  }

  isTicketDeleted(): boolean {
    return this.isDeleted;
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

  hasEnoughQuantityInStock(numberTicketsBought: number): boolean {
    return this.quantity - numberTicketsBought >= 0;
  }

  buyNumberOfTickets(numberTicketsBought: number): void {
    this.quantity = this.quantity - numberTicketsBought;
    this.numberTotalSell = this.numberTotalSell + numberTicketsBought;
    this.lastBuyDate = Date.now();
  }
}

export default TicketEntity;
