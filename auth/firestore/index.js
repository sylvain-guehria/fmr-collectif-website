import admin from 'firebase-admin';
import serviceAccount from './serviceAccountKey.json';
import logger from '../../modules/logger/logger';

// const serviceAccount = {
//   type: process.env.NEXT_PUBLIC_FIREBASE_TYPE,
//   project_id:  process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   private_key_id: process.env.NEXT_FIREBASE_PRIVATE_KEY_ID,
//   private_key:process.env.NEXT_FIREBASE_PRIVATE_KEY,
//   client_email: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
//   client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
//   auth_uri: process.env.NEXT_PUBLIC_FIREBASE_AUTH_URI,
//   token_uri: process.env.NEXT_PUBLIC_FIREBASE_TOKEN_URI,
//   auth_provider_x509_cert_url: process.env.NEXT_PUBLIC_FIREBASE_auth_provider_x509_cert_url,
//   client_x509_cert_url: process.env.NEXT_PUBLIC_FIREBASE_client_x509_cert_url
// };


if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
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