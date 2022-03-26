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

export const getTicketDate = (timestamp: number): string => {
  if (!_isNumber(timestamp)) return '';
  return new Date(timestamp).toLocaleDateString('fr').split('T')[0];
};

export const getTicketHour = (timestamp: number): string => {
  if (!_isNumber(timestamp)) return '';
  const fullDate = new Date(timestamp);
  const hour = fullDate.getHours() < 10 ? `0${fullDate.getHours()}` : fullDate.getHours();
  const minutes = fullDate.getMinutes() < 10 ? `0${fullDate.getMinutes()}` : fullDate.getMinutes();
  return `${hour}h${minutes}`;
};

const _isNumber = (potentialNumber: unknown): boolean => {
  return typeof potentialNumber === 'number' && !isNaN(potentialNumber);
};
