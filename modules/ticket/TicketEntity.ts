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
  isActive: boolean;
  description: string;

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
    this.isActive = ticket.isActive || false;
    this.description = ticket.description || '';
  }

  getId(): string {
    return this.uid;
  }

  getLabel(): string {
    return this.label;
  }

  getDescription(): string {
    return this.description;
  }

  getPlace(): string {
    return this.place;
  }

  getDate(): number {
    return this.date;
  }

  isTicketDeleted(): boolean {
    return this.isDeleted;
  }

  isTicketForSales(): boolean {
    return this.isActive;
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
