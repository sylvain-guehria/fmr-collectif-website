import db from '../../../firebase/firestore/index';
import logger from '../../../modules/logger/logger';

export default async (req, res) => {
  try {
    const {
      uid,
      date,
      place,
      label,
      quantity,
      price,
      numberTotalSell,
      lastBuyDate,
      isDeleted
    } = req.body;

    const tickets = await db.collection('tickets').get();
    const ticketIds = tickets.docs.map(ticket => ticket.data().uid);

    if (!uid) {
      res.statusMessage = `uid is ${uid}, cannot create new ticket`;
      res.status(400).end();
    }

    if (ticketIds.some(ticketId => ticketId === uid)) {
      res.statusMessage = `an ticket already has this uid : ${uid}, cannot create new ticket`;
      res.status(400).end();
    }

    await db.collection('tickets').doc(uid).set({
      uid,
      date,
      place,
      label,
      quantity,
      price,
      numberTotalSell,
      lastBuyDate,
      isDeleted
    });
    res.status(200).json({
      uid,
      date,
      place,
      label,
      quantity,
      price,
      numberTotalSell,
      lastBuyDate,
      isDeleted
    });
  } catch (e) {
    logger.error('error when saving ticket', e);
    res.status(400).end();
  }
};