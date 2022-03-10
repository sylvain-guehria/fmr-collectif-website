import { methodMustBeImplemented } from '../../utils/abstract';
import TicketEntity from './TicketEntity';
import { Ticket } from './ticketType';

/**
 * @abstract
 */
class TicketRepository {
  constructor() {
    if (this.constructor === TicketRepository) {
      throw new TypeError(
        'Abstract class "ProfileRepository" cannot be instantiated, it can only be extended.'
      );
    }
  }

  async getById(uid: string): Promise<TicketEntity> {
    throw methodMustBeImplemented(uid);
  }

  async deleteById(uid: string): Promise<void> {
    throw methodMustBeImplemented(uid);
  }

  async add(ticket: Ticket): Promise<TicketEntity> {
    throw methodMustBeImplemented(ticket);
  }

  async getAll(): Promise<TicketEntity[]> {
    throw methodMustBeImplemented();
  }

  async update(ticket: TicketEntity): Promise<void> {
    throw methodMustBeImplemented(ticket);
  }
}

export default TicketRepository;
