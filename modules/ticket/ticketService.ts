import TicketRepository from './ticketRepository';
import TicketEntity from './TicketEntity';
import { Ticket } from './ticketType';
import { StorageInterface } from '../../firebase/modules/storage';

class ticketService {
  ticketRepository;
  storageFunctions;

  constructor(ticketRepository: TicketRepository, storageFunctions: StorageInterface) {
    this.ticketRepository = ticketRepository;
    this.storageFunctions = storageFunctions;
  }

  async editTicket(ticket: TicketEntity): Promise<void> {
    return await this.ticketRepository.update(ticket);
  }

  async createTicket(ticket: Ticket): Promise<TicketEntity> {
    return await this.ticketRepository.add(ticket);
  }

  async deleteTicket(uid: string): Promise<void> {
    return await this.ticketRepository.deleteById(uid);
  }

  async buyNumberOfTickets(ticket: TicketEntity, quantityBought: number): Promise<void> {
    ticket.buyNumberOfTickets(quantityBought);
    return await this.ticketRepository.update(ticket);
  }
}

export default ticketService;
