import React, { useState, useEffect, useContext, createContext } from 'react';
// import queryString from 'query-string';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import logger from '../modules/logger/logger';
import { useToasts } from 'react-toast-notifications';
import firebaseUserRepository from '../modules/user/firebaseUserRepository';
import UserEntity from '../modules/user/UserEntity';
import { useRouter } from 'next/router';

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
const userRepository = new firebaseUserRepository();

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
  const [isUserLoading, setIsUserLoading] = useState(true);
  const { addToast } = useToasts();
  const router = useRouter();

  const loginEmail = (email, password) => {
    setIsUserLoading(true);
    return auth.signInWithEmailAndPassword(email, password).then(response => {
      return response.user;
    }).then(() => setIsUserLoading(false)).catch(e => {
      addToast(e.message, { appearance: 'error', autoDismiss: true });
      setIsUserLoading(false);
    });
  };

  const loginGoogle = () => {
    setIsUserLoading(true);
    const provider = new firebase.default.auth.GoogleAuthProvider();
    return auth
      .signInWithPopup(provider)
      .then(response => {
        setIsUserLoading(false);
        return {
          uid: response.user?.uid,
          email: response.user?.email,
          isNewUser: response.additionalUserInfo?.isNewUser,
          firstName: response.additionalUserInfo?.profile?.given_name,
          lastName: response.additionalUserInfo?.profile?.family_name
        };
      })
      .catch(function (error) {
        addToast(error.message, { appearance: 'error', autoDismiss: true });
        logger.error(error);
        setIsUserLoading(false);
      });
  };

  const loginFacebook = () => {
    setIsUserLoading(true);
    const facebookProvider = new firebase.default.auth.FacebookAuthProvider();
    return auth
      .signInWithPopup(facebookProvider).
      then(response => {
        setIsUserLoading(false);
        return {
          uid: response.user?.uid,
          email: response.user?.email,
          isNewUser: response.additionalUserInfo?.isNewUser,
          firstName: response.additionalUserInfo?.profile?.first_name,
          lastName: response.additionalUserInfo?.profile?.last_name
        };
      })
      .catch(error => {
        addToast(error.message, { appearance: 'error', autoDismiss: true });
        logger.info(error);
        setIsUserLoading(false);
      });
  };

  const signUpEmail = (email, password) => {
    setIsUserLoading(true);
    return firebase.default
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        setIsUserLoading(false);
        return {
          uid: response.user?.uid,
          email: response.user?.email,
          roles: ['user']
        };
      })
      .catch(error => {
        addToast(error.message, { appearance: 'error', autoDismiss: true });
        logger.error({ error });
        setIsUserLoading(false);
      });
  };

  const signout = () => {
    return auth
      .signOut()
      .then(() => {
        addToast('Aurevoir =)', { appearance: 'info', autoDismiss: true });
        setUser(false);
        router.push('/');
      })
      .catch(function (error) {
        addToast(error.message, { appearance: 'error', autoDismiss: true });
        logger.error(error);
      });
  };

  const sendPasswordResetEmail = async (email) => {
    auth.sendPasswordResetEmail(email).then(() => {
      addToast('Un email pour vient de vous être envoyer', { appearance: 'info', autoDismiss: true });
    })
      .catch(function (error) {
        addToast(error.message, { appearance: 'error', autoDismiss: true });
        logger.error(error);
      });
  };

  const confirmPasswordReset = (password, code) => {
    const resetCode = code || '';

    return auth.confirmPasswordReset(resetCode, password).then(() => {
      return true;
    });
  };

  useEffect(() => {
    const fetchUserInformation = async (uid) => {
      setIsUserLoading(true);
      return await userRepository.getById(uid);
    };

    const updateLastConnected = async (user) => {
      return await userRepository.update(user);
    };

    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const fullUser = await fetchUserInformation(user.uid);
        updateLastConnected(fullUser.updateLastLogin());
        setUser(fullUser.email ? fullUser : UserEntity.new({ ...user }));
        setIsUserLoading(false);
        addToast(`Bonjour ${fullUser?.firstName} =)`, { appearance: 'success', autoDismiss: true });
      } else {
        setUser(false);
        setIsUserLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    userId: user && user.uid,
    user: user,
    isUserLoading,
    loginEmail,
    loginGoogle,
    loginFacebook,
    signUpEmail,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset
  };
}
