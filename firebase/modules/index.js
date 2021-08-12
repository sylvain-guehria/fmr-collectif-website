// import queryString from 'query-string';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/firebase-storage';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_storageBucket,
  messagingSenderId: process.env.FIREBASE_messagingSenderId,
  appId: process.env.FIREBASE_appId,
  measurementId: process.env.FIREBASE_measurementId
};

let firebaseApp;

if (!firebase.default.apps.length) {
  firebaseApp = firebase.default.initializeApp(firebaseConfig);
} else {
  firebaseApp = firebase.default.app();
}

export const fs = firebaseApp.firestore();
export const auth = firebase.default.auth();
export const storage = firebase.default.storage();