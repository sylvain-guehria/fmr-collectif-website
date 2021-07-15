import userRepository from '../modules/user/userRepository';
import { NextRouter } from 'next/router';
import { PROVIDERS } from '../modules/user/userType';

export const facebookConnexion =
  (userRepository: userRepository) =>
  async (
    auth: {
      loginFacebook: () => Promise<authResponse>;
    },
    router: NextRouter
  ): Promise<void> => {
    const response = (await auth.loginFacebook()) || {};
    const { isNewUser, uid, email, firstName, lastName } = response;
    if (isNewUser) {
      await userRepository.add({
        uid: uid,
        email: email,
        firstName: firstName,
        lastName: lastName,
        provider: PROVIDERS.FACEBOOK,
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
