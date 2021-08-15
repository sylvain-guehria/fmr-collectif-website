import db from '../../../firebase/firestore/index';
import logger from '../../../modules/logger/logger';

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
      lastLogin,
      provider
    } = req.body;
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
      lastLogin,
      provider
    });
    res.status(200).json({ id });
  } catch (e) {
    logger.error('error when saving user', e);
    res.status(400).end();
  }
};
