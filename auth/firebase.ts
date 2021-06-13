import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { User } from '../modules/user/shared/userType';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_storageBucket,
  messagingSenderId: process.env.FIREBASE_messagingSenderId,
  appId: process.env.FIREBASE_appId,
  measurementId: process.env.FIREBASE_measurementId,
};

let firebaseApp;

if (!firebase.default.apps.length) {
  firebaseApp = firebase.default.initializeApp(firebaseConfig);
} else {
  firebaseApp = firebase.default.app();
}

export const fs = firebaseApp.firestore();

export const auth = firebase.default.auth();

export const loginGoogle = (): void => {
  const provider = new firebase.default.auth.GoogleAuthProvider();
  firebase.default
    .auth()
    .signInWithPopup(provider)
    .then((response) => {
      const user: User = {
        uid: response.user?.uid,
        email: response.user?.email,
        roles: ['user'],
      };
      console.log('google log res:', response);

      if (response.additionalUserInfo?.isNewUser) createUserInDatabase(user);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const logout = (): void => {
  firebase.default
    .auth()
    .signOut()
    .catch(function (error) {
      console.log(error);
    });
};

export const signUpEmail = (email: string, password: string): Promise<Record<string, unknown>> => {
  return new Promise((resolve, reject) => {
    firebase.default
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const payload = {
          uid: response.user?.uid,
          email: response.user?.email,
          roles: ['user'],
        };
        console.log({ payload });
        resolve({ success: true });
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const loginEmail = (email: string, password: string): Promise<Record<string, unknown>> => {
  return new Promise((resolve, reject) => {
    firebase.default
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log({ res });
        resolve({ success: true });
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const sendResetPassEmail = (emailAddress: string): Promise<Record<string, unknown>> => {
  return new Promise((resolve, reject) => {
    firebase.default
      .auth()
      .sendPasswordResetEmail(emailAddress)
      .then(() => {
        resolve({ success: true });
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const setAuthChange = (): void => {
  firebase.default.auth().onAuthStateChanged((userfb) => {
    if (userfb) {
      const user: User = {
        uid: userfb.uid,
      };
      console.log('user connected', user);
    }
  });
};

const createUserInDatabase = (user: User): void => {
  console.log('Create user in db: ', user);
};
