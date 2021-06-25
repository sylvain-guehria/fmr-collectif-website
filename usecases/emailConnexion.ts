import { NextRouter } from 'next/router';

export const emailConnexion =
  () =>
  async (
    auth: {
      loginEmail: (email: string, password: string) => Promise<authResponse>;
    },
    router: NextRouter,
    { email, password }: emailConnexionInfo
  ): Promise<void> => {
    const response = (await auth.loginEmail(email, password)) || {};
    if (response?.uid) {
      router.push('/');
    }
  };

type emailConnexionInfo = {
  email: string;
  password: string;
};

type authResponse = {
  uid: string | undefined;
  email: string | null | undefined;
  firstName: string | undefined;
};
