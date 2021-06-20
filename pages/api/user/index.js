import db from '../../../aaapi/firestore/index';

export default async (req, res) => {
  try {
    const { slug } = req.body;
    const users = await db.collection('users').get();
    const usersData = users.docs.map(user => user.data());

    if (usersData.some(user => user.slug === slug)) {
      console.log('1');
      res.status(400).end();
    } else {
      const { id } = await db.collection('users').add({
        ...req.body,
        created: new Date().toISOString()
      });
      res.status(200).json({ id });
    }
  } catch (e) {
    console.log('2');
    res.status(400).end();
  }
};