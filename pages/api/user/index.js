import db from '../../../api/firestore/index';

export default async (req, res) => {
  try {
    const { slug } = req.body;
    const users = await db.collection('users').get();
    const usersData = users.docs.map(user => user.data());
// TODO UNDERSTAND THIS ?? error when 1 user exist;
    if (usersData.some(user => user.slug === slug)) {
      res.status(400).end();
    } else {
      const { id } = await db.collection('users').add({
        ...req.body
      });
      res.status(200).json({ id });
    }
  } catch (e) {
    res.status(400).end();
  }
};