import React from 'react';
import Button from '../../CustomButtons/Button';
import { makeStyles } from '@material-ui/core/styles';
import signupPageStyle from '../../../styles/jss/nextjs-material-kit-pro/pages/signupPageStyle.js';
import { useAuth } from '../../../api/auth/useAuth';
import { useRouter } from 'next/router';
import googleConnexionUseCase from '../../../api/auth/googleConnexionUseCase';

const useStyles = makeStyles(signupPageStyle);

const LoginWithOtherAccount: React.FC = (): React.ReactElement => {
  const classes = useStyles();
  const auth = useAuth();
  const router = useRouter();

  const callLoginFacebook = (): void => {
    auth.loginFacebook().then(() => {
      router.push('/');
    });
  };

  return (
    <div className={classes.textCenter}>
      <Button
        justIcon
        round
        color="facebook"
        className={classes.iconButtons}
        onClick={() => callLoginFacebook()}>
        <i className={classes.socials + ' fab fa-facebook-f'} />
      </Button>
      <Button
        justIcon
        round
        color="google"
        className={classes.iconButtons}
        onClick={() => googleConnexionUseCase(auth, router)}>
        <i className={classes.socials + ' fab fa-google'} />
      </Button>
    </div>
  );
};

export default LoginWithOtherAccount;
