import { Ticket } from '../modules/ticket/ticketType';
import TicketEntity from '../modules/ticket/TicketEntity';
import ticketServiceDi from '../modules/ticket/ticketService';

export const saveTicket =
  (ticketServiceDi: ticketServiceDi) =>
  async (ticket: Ticket): Promise<void> => {
    const {
      uid,
      date,
      place,
      label,
      quantity,
      price,
      numberTotalSell,
      lastBuyDate,
      isDeleted,
      isActive,
      description,
    } = ticket;

    const updatedTicket = TicketEntity.new({
      uid,
      date,
      place,
      label,
      quantity,
      price,
      numberTotalSell,
      lastBuyDate,
      isDeleted,
      isActive,
      description,
    });

    return await ticketServiceDi.editTicket(updatedTicket);
  };
