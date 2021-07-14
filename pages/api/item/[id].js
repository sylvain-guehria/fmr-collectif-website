import db from '../../../auth/firestore/index';

export default async (req, res) => {
  const { id } = req.query;
  try {
    if (req.method === 'PUT') {
      await db.collection('items').doc(id).update({
        ...req.body
      });
    } else if (req.method === 'GET') {
      const doc = await db.collection('items').doc(id).get();
      if (!doc.exists) {
        // res.status(200).end();
      } else {
        res.status(200).json(doc.data());
      }
    } else if (req.method === 'DELETE') {
      await db.collection('items').doc(id).delete();
    }
    res.status(200).end();
  } catch (e) {
    res.status(400).end();
  }
};