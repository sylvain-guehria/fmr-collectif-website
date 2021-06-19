import React from 'react';
import Button from '../../CustomButtons/Button';
import { makeStyles } from '@material-ui/core/styles';
import signupPageStyle from '../../../styles/jss/nextjs-material-kit-pro/pages/signupPageStyle.js';
import { useAuth } from '../../../api/auth/useAuth';
import { useRouter } from 'next/router';

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

  const callLoginGoogle = (): void => {
    auth.loginGoogle().then(() => {
      router.push('/');
    });
  };

  return (
    <div className={classes.socialLine}>
      <Button
        justIcon
        color="transparent"
        className={classes.iconButtons}
        onClick={() => callLoginFacebook()}>
        <i className="fab fa-facebook" />
      </Button>
      <Button
        justIcon
        color="transparent"
        className={classes.iconButtons}
        onClick={() => callLoginGoogle()}>
        <i className="fab fa-google-plus-g" />
      </Button>
    </div>
  );
};

export default LoginWithOtherAccount;
