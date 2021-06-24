import userRepository from '../modules/user/userRepository';
import UserEntity from '../modules/user/UserEntity';
import { NextRouter } from 'next/router';

export const googleConnexion =
  (userRepository: userRepository) =>
  async (
    auth: {
      loginGoogle: () => Promise<authResponse>;
    },
    router: NextRouter
  ): Promise<void> => {
    const response = (await auth.loginGoogle()) || {};
    const { isNewUser, uid, email } = response;

    if (isNewUser) {
      await userRepository.add(
        UserEntity.new({
          uid: uid,
          email: email,
        })
      );
    }
    router.push('/');
  };

type authResponse = {
  uid: string | undefined;
  email: string | null | undefined;
  isNewUser: boolean | undefined;
};
