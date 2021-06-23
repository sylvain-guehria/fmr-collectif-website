import firebaseUserRepository from '../modules/user/firebaseUserRepository';
import UserEntity from '../modules/user/UserEntity';

const registerWithEmailUseCase = async (auth, router, { firstName, email, password }) => {

  const userRepository = new firebaseUserRepository();
  let response;

  response = await auth.signUpEmail(email, password) || {};

  if (response?.uid) {
    const { uid } = response;

    await userRepository.add(
      UserEntity.new({
        uid: uid,
        email: email,
        displayName: firstName
      })
    );
    router.push('/');
  }
};

export default registerWithEmailUseCase;
