import firebaseUserRepository from '../modules/user/firebaseUserRepository';
import UserEntity from '../modules/user/UserEntity';

const facebookConnexion = async (auth, router) => {

  const userRepository = new firebaseUserRepository();

  const response = await auth.loginFacebook() ||{};
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

export default facebookConnexion;
