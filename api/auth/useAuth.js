import React, { useState, useEffect, useContext, createContext } from 'react';
// import queryString from 'query-string';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import logger from '../../modules/logger/logger';
import axios from 'axios';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_storageBucket,
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
const authContext = createContext();
export const auth = firebase.default.auth();

// eslint-disable-next-line react/prop-types
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const loginEmail = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password).then(response => {
      setUser(response.user);
      return response.user;
    });
  };

  const loginGoogle = () => {
    const provider = new firebase.default.auth.GoogleAuthProvider();
    return auth
      .signInWithPopup(provider)
      .then(response => {
        const user = {
          uid: response.user?.uid || '',
          email: response.user?.email || '',
          roles: ['user']
        };
        logger.info('loginGoogle', { user });

        if (response.additionalUserInfo?.isNewUser) createUserInDatabase(user);
      })
      .catch(function (error) {
        logger.info(error);
      });
  };

  const loginFacebook = () => {
    const facebookProvider = new firebase.default.auth.FacebookAuthProvider();
    return auth
      .signInWithPopup(facebookProvider)
      .then(result => {
        /** @type {firebase.auth.OAuthCredential} */
        const credential = result.credential;
        const user = result.user;
        logger.info('loginFacebook', { credential, user });
      })
      .catch(error => {
        logger.info(error);
      });
  };

  const signUpEmail = (email, password) => {
    return firebase.default
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        const payload = {
          uid: response.user?.uid,
          email: response.user?.email,
          roles: ['user']
        };
        logger.info('createUserWithEmailAndPassword', { payload });
        createUserInDatabase(payload);
      })
      .catch(error => {
        logger.info({ error });
      });
  };

  const signout = () => {
    return auth
      .signOut()
      .then(() => {
        setUser(false);
      })
      .catch(function (error) {
        logger.info(error);
      });
  };

  const sendPasswordResetEmail = email => {
    return auth.sendPasswordResetEmail(email).then(() => {
      return true;
    });
  };

  const confirmPasswordReset = (password, code) => {
    // const resetCode = code || getFromQueryString('oobCode');
    const resetCode = code || '';

    return auth.confirmPasswordReset(resetCode, password).then(() => {
      return true;
    });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    userId: user && user.uid,
    user: user,
    loginEmail,
    loginGoogle,
    loginFacebook,
    signUpEmail,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset
  };
}

// const getFromQueryString = (key) => {
//     return queryString.parse(window.location.search)[key];
// };

const createUserInDatabase = async ({ uid, email, roles }) => {
  logger.info('Create user in db: ', { uid, email, role: roles[0] });
  const res = await axios.post('/api/user', {
    uid: uid,
    email: email,
    role: roles[0]
  });
  logger.info('Respons axios firestore: ', res);
};
