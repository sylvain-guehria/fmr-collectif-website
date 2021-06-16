import { setAuthCookies } from 'next-firebase-auth';
import initAuth from '../../auth/initAuth';
import logger from '../../modules/logger/logger';

initAuth();

const handler = async (req, res) => {
  try {
    await setAuthCookies(req, res);
  } catch (e) {
    logger.error(e);

    return res.status(500).json({ error: 'Unexpected error.' });
  }
  return res.status(200).json({ status: true });
};

export default handler;
