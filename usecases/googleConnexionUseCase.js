import firebaseUserRepository from '../modules/user/firebaseUserRepository';
import UserEntity from '../modules/user/UserEntity';

const googleConnexionUseCase = async (auth, router) => {

  const userRepository = new firebaseUserRepository();

  const { isNewUser, uid, email } = await auth.loginGoogle();

  if (isNewUser) {
    await userRepository.add(
      UserEntity.new({
        uid: uid,
        email: email
      })
    );
  }
  router.push('/');
};

export default googleConnexionUseCase;
