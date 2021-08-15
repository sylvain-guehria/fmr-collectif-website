import db from '../../../firebase/firestore/index';

export default async (req, res) => {
  try {
    const items = await db.collection('items').orderBy('label').get();
    const itemsData = items.docs.map(item => ({
      id: item.id,
      ...item.data()
    }));
    res.status(200).json(itemsData);
  } catch (e) {
    res.status(400).end();
  }
};