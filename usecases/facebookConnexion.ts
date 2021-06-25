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
    const { isNewUser, uid, email } = response;

    if (isNewUser) {
      await userRepository.add(
        UserEntity.new({
          uid: uid,
          email: email,
        })
      );
    }
    if (uid) router.push('/');
  };

type authResponse = {
  uid: string | undefined;
  email: string | null | undefined;
  isNewUser: boolean | undefined;
};
