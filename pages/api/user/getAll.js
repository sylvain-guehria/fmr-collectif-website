import db from '../../../api/firestore/index';

export default async (req, res) => {
  try {
    const users = await db.collection('users').orderBy('creationDate').get();
    const usersData = users.docs.map(entry => ({
      id: entry.id,
      ...entry.data()
    }));
    res.status(200).json(usersData);
  } catch (e) {
    res.status(400).end();
  }
};