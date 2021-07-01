import userRepository from '../modules/user/userRepository';
import UserEntity from '../modules/user/UserEntity';
import { NextRouter } from 'next/router';

export const facebookConnexion =
  (userRepository: userRepository) =>
  async (
    auth: {
      loginFacebook: () => Promise<authResponse>;
    },
    router: NextRouter
  ): Promise<void> => {
    const response = (await auth.loginFacebook()) || {};
    // eslint-disable-next-line no-console
    console.log('facebook response: ', response);

    const { isNewUser, uid, email, firstName, lastName } = response;

    if (isNewUser) {
      await userRepository.add(
        UserEntity.new({
          uid: uid,
          email: email,
          firstName: firstName,
          lastName: lastName,
        })
      );
    }
    if (uid) router.push('/');
  };

type authResponse = {
  uid: string | undefined;
  email: string | null | undefined;
  isNewUser: boolean | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
};
