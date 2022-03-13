import TicketEntity from 'modules/ticket/TicketEntity';

export const getIdOfTheNextTicketEvent = (tickets: TicketEntity[]): string => {
  if (!tickets || !tickets.length) return '';

  tickets.sort((a, b) => {
    return a.date - b.date;
  });

  const ticketsWithDateLaterThanNow = tickets.filter(ticket => ticket.getDate() > Date.now());

  const idsOfTickets = Array.from(ticketsWithDateLaterThanNow, ticket => ticket.getId());
  return idsOfTickets && idsOfTickets.length ? idsOfTickets[0] : '';
};
