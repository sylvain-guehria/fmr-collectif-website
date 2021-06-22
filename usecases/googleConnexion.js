import firebaseUserRepository from '../modules/user/firebaseUserRepository';
import UserEntity from '../modules/user/UserEntity';

const googleConnexionUseCase = async (auth, router) => {

  const userRepository = new firebaseUserRepository();

  const response = await auth.loginGoogle() ||{};
  const { isNewUser, uid, email } = response;

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
