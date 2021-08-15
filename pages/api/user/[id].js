import db from '../../../firebase/firestore/index';
import logger from '../../../modules/logger/logger';

export default async (req, res) => {
  const { id } = req.query;
  try {
    if (req.method === 'PUT') {
      await db.collection('users').doc(id).update({
        ...req.body
      });
    } else if (req.method === 'GET') {
      const doc = await db.collection('users').doc(id).get();
      if (!doc.exists) {
        // res.status(200).end();
      } else {
        res.status(200).json(doc.data());
      }
    } else if (req.method === 'DELETE') {
      await db.collection('users').doc(id).delete();
    }
    res.status(200).end();
  } catch (e) {
    logger.error(e);
    res.status(400).end();
  }
};