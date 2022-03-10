import ItemRepository from './ticketRepository';
import axios from 'axios';
import logger from '../logger/logger';
import TicketEntity from './TicketEntity';
import { v4 as uuidV4 } from 'uuid';
import { Ticket } from './ticketType';

class FirebaseItemRepository extends ItemRepository {
  constructor() {
    super();
  }

  async getById(uid: string): Promise<TicketEntity> {
    logger.info('get ticket in db with uid: ', uid);
    const response = await axios.get(`/ticket/${uid}`);
    const { date, place, label, quantity, price, numberTotalSell, lastBuyDate, isDeleted } =
      response.data;

    return new TicketEntity({
      uid: uid,
      date,
      place,
      label,
      quantity,
      price,
      numberTotalSell,
      lastBuyDate,
      isDeleted,
    });
  }

  async deleteById(uid: string): Promise<void> {
    logger.info('delete ticket in db with uid: ', uid);
    await axios.delete(`/ticket/${uid}`);
  }

  async add(ticket: Ticket): Promise<TicketEntity> {
    logger.info('add ticket in db with uid: ', ticket.uid);
    const res = await axios.post('/ticket/save', {
      uid: ticket.uid || uuidV4(),
      label: ticket.label || '',
      date: ticket.date || 0,
      place: ticket.place || '',
      quantity: ticket.quantity || 0,
      price: ticket.price || 0,
      numberTotalSell: ticket.numberTotalSell || 0,
      lastBuyDate: ticket.lastBuyDate || 0,
      isDeleted: ticket.isDeleted || false,
    });
    return new TicketEntity(res.data);
  }

  async getAll(): Promise<TicketEntity[]> {
    logger.info('get all tickets in db');
    const response = await axios.get('/ticket/getAll');
    return response.data.map(
      (ticket: TicketEntity) =>
        new TicketEntity({
          uid: ticket.uid,
          label: ticket.label,
          date: ticket.date,
          place: ticket.place,
          quantity: ticket.quantity,
          price: ticket.price,
          numberTotalSell: ticket.numberTotalSell,
          lastBuyDate: ticket.lastBuyDate,
          isDeleted: ticket.isDeleted,
        })
    );
  }

  async update(ticket: TicketEntity): Promise<void> {
    logger.info('update ticket uid: ', ticket.uid);
    return await axios.put(`/ticket/${ticket.uid}`, {
      uid: ticket.getId(),
      label: ticket.getLabel(),
      date: ticket.getDate(),
      place: ticket.getPlace(),
      quantity: ticket.getQuantity(),
      price: ticket.getPrice(),
      numberTotalSell: ticket.getNumberTotalSell(),
      lastBuyDate: ticket.getLastBuyDate(),
      isDeleted: ticket.isTicketDeleted(),
    });
  }
}

export default FirebaseItemRepository;
