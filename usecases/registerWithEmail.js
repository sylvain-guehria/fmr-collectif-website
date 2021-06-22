import firebaseUserRepository from '../modules/user/firebaseUserRepository';
import UserEntity from '../modules/user/UserEntity';

const registerWithEmailUseCase = async (auth, router, { firstName, email, password }) => {

  const userRepository = new firebaseUserRepository();
  const response = await auth.signUpEmail(email, password) || {};

  if (response) {
    const { uid } = response;

    await userRepository.add(
      UserEntity.new({
        uid: uid,
        email: email,
        displayName: firstName
      })
    );
  }
  router.push('/');
};

export default registerWithEmailUseCase;
