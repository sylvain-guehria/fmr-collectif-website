import admin from 'firebase-admin';
import logger from '../../modules/logger/logger';

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert('serviceAccount HERE')
    });
  } catch (error) {
    logger.error('Firebase admin initialization error', error.stack);
  }
}

if (process.env.ENV === 'local') {
  logger.info('using auth emulator on port 8080');
  process.env['FIRESTORE_EMULATOR_HOST'] = 'localhost:8080';
}

export default admin.firestore();