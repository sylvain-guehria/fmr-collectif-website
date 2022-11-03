import React, { useState, useEffect, useContext, createContext } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import logger from '../modules/logger/logger';
import { toast } from 'react-toastify';
import firebaseUserRepository from '../modules/user/firebaseUserRepository';
import UserEntity from '../modules/user/UserEntity';
import { useRouter } from 'next/router';
import { auth } from '../firebase/modules';
import cookie from 'js-cookie';

const userRepository = new firebaseUserRepository();
const authContext = createContext<{ user: firebaseClient.User | null }>({
  user: null,
});

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
  const router = useRouter();
  const tokenName = 'firebaseToken'

  const loginEmail = (email, password) => {
    setIsUserLoading(true);
    return auth.signInWithEmailAndPassword(email, password).then(response => {
      return response.user;
    }).then(() => setIsUserLoading(false)).catch(e => {
      toast.error(e.message);
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
        toast.error(error.message);
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
        toast.error(error.message);
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
        toast.error(error.message);
        logger.error({ error });
        setIsUserLoading(false);
      });
  };

  const signout = () => {
    return auth
      .signOut()
      .then(() => {
        toast.info('Aurevoir =)');
        setUser(false);
        router.push('/');
      })
      .catch(function (error) {
        toast.error(error.message);
        logger.error(error);
      });
  };

  const sendPasswordResetEmail = async (email) => {
    auth.sendPasswordResetEmail(email).then(() => {
      toast.info('Un email pour vient de vous être envoyer');
    })
      .catch(function (error) {
        toast.error(error.message);
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
      await userRepository.update(user);
    };

    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        cookie.set(tokenName, token, { expires: 14 });
        const fullUser = await fetchUserInformation(user.uid);
        if (fullUser.email) {
          updateLastConnected(fullUser.updateLastLogin());
          setUser(fullUser);
        } else {
          setUser(UserEntity.new({ ...user }));
        }
        setIsUserLoading(false);
      } else {
        cookie.remove(tokenName);
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
