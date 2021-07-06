import db from '../../../auth/firestore/index';

export default async (req, res) => {
  const { id } = req.query;

  try {
    if (req.method === 'PUT') {
      await db.collection('Items').doc(id).update({
        ...req.body,
        updated: new Date().toISOString()
      });
    } else if (req.method === 'GET') {
      const doc = await db.collection('Items').doc(id).get();
      if (!doc.exists) {
        // res.status(200).end();
      } else {
        res.status(200).json(doc.data());
      }
    } else if (req.method === 'DELETE') {
      await db.collection('Items').doc(id).delete();
    }
    res.status(200).end();
  } catch (e) {
    res.status(400).end();
  }
};