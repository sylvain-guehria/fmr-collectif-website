import userRepository from '../modules/user/userRepository';
import { NextRouter } from 'next/router';
import { PROVIDERS } from '../modules/user/userType';

export const googleConnexion =
  (userRepository: userRepository) =>
  async (
    auth: {
      loginGoogle: () => Promise<authResponse>;
    },
    router: NextRouter
  ): Promise<void> => {
    const response = (await auth.loginGoogle()) || {};
    const { isNewUser, uid, email, firstName, lastName } = response;

    if (isNewUser) {
      await userRepository.add({
        uid: uid,
        email: email,
        firstName: firstName,
        lastName: lastName,
        provider: PROVIDERS.GOOGLE,
      });
    }
    if (uid) router.push('/');
  };

type authResponse = {
  uid: string;
  email: string;
  isNewUser: boolean;
  firstName: string;
  lastName: string;
};
