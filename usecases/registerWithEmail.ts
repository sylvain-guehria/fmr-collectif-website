import userRepository from '../modules/user/userRepository';
import { NextRouter } from 'next/router';

export const registerWithEmail =
  (userRepository: userRepository) =>
  async (
    auth: {
      signUpEmail: (email: string, password: string) => Promise<authResponse>;
    },
    router: NextRouter,
    { firstName, email, password, lastName }: registerInfo
  ): Promise<void> => {
    const response = (await auth.signUpEmail(email, password)) || {};
    const uid = response?.uid;
    if (uid) {
      await userRepository.add({
        uid: uid,
        email: email,
        firstName: firstName,
        lastName: lastName,
      });
      router.push('/');
    }
  };

type authResponse = {
  uid: string | undefined;
  email: string | null | undefined;
  firstName: string | undefined;
};

type registerInfo = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
