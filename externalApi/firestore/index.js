import admin from 'firebase-admin';
import serviceAccount from './serviceAccountKey.json';
import logger from '../../modules/logger/logger';

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
  } catch (error) {
    logger.error('Firebase admin initialization error', error.stack);
  }
}
export default admin.firestore();