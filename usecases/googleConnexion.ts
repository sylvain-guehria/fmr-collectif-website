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
