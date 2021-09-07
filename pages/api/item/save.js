import db from '../../../firebase/firestore/index';
import logger from '../../../modules/logger/logger';

export default async (req, res) => {
  try {
    const {
      uid,
      label,
      size,
      photoLink,
      color,
      quantity,
      price,
      numberTotalSell,
      lastBuyDate,
      isDeleted
    }
      = req.body;
    const items = await db.collection('items').get();
    const itemIds = items.docs.map(item => item.data().uid);

    if (!uid) {
      res.statusMessage = `uid is ${uid}, cannot create new item`;
      res.status(400).end();
    }

    if (itemIds.some(itemId => itemId === uid)) {
      res.statusMessage = `an item already has this uid : ${uid}, cannot create new item`;
      res.status(400).end();
    }

    await db.collection('items').doc(uid).set({
      uid,
      label,
      size,
      photoLink,
      color,
      quantity,
      price,
      numberTotalSell,
      lastBuyDate,
      isDeleted
    });
    res.status(200).json({
      uid,
      label,
      size,
      photoLink,
      color,
      quantity,
      price,
      numberTotalSell,
      lastBuyDate,
      isDeleted
    });
  } catch (e) {
    logger.error('error when saving item', e);
    res.status(400).end();
  }
};