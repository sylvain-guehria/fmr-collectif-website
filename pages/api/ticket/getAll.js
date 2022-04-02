import db from '../../../firebase/firestore/index';
import logger from '../../../modules/logger/logger';

export default async (req, res) => {
  try {
    const tickets = await db.collection('tickets').orderBy('label').get();
    const ticketsData = tickets.docs.map(ticket => ({
      id: ticket.id,
      ...ticket.data()
    }));
    res.status(200).json(ticketsData);
  } catch (e) {
    logger.error('error when fetching all tickets', e);
    res.status(400).end();
  }
};