const emailConnexionUseCase = async (auth, router,  { email, password }) => {
  await auth.loginEmail(email, password) ||{};
  router.push('/');
};

export default emailConnexionUseCase;
