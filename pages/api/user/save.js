import db from '../../../firebase/firestore/index';

export default async (req, res) => {
  try {
    const {
      uid,
      email,
      pseudo,
      firstName,
      lastName,
      language,
      phoneNumber,
      role,
      creationDate,
      lastLogin
    }
      = req.body;
    const users = await db.collection('users').get();
    const usersIds = users.docs.map(user => user.data().uid);

    if (!uid) {
      res.statusMessage = `uid is ${uid}, cannot create new user`;
      res.status(400).end();
    }

    if (usersIds.some(userId => userId === uid)) {
      res.statusMessage = `a user already has this uid : ${uid}, cannot create new user`;
      res.status(400).end();
    }

    const { id } = await db.collection('users').doc(uid).set({
      uid,
      email,
      pseudo,
      firstName,
      lastName,
      language,
      phoneNumber,
      role,
      creationDate,
      lastLogin
    });
    res.status(200).json({ id });
  } catch (e) {
    res.status(400).end();
  }
};