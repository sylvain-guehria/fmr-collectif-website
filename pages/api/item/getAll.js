import db from '../../../firebase/firestore/index';
import logger from '../../../modules/logger/logger';

export default async (req, res) => {
  try {
    const items = await db.collection('items').orderBy('label').get();
    const itemsData = items.docs.map(item => ({
      id: item.id,
      ...item.data()
    }));
    res.status(200).json(itemsData);
  } catch (e) {
    logger.error('error when fetching all items', e);
    res.status(400).end();
  }
};