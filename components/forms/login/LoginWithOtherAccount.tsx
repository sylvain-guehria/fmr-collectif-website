import React from 'react';
import Button from '../../lib/CustomButtons/Button';
import { makeStyles } from '@material-ui/core/styles';
import signupPageStyle from '../../../styles/jss/nextjs-material-kit-pro/pages/signupPageStyle';
import { useAuth } from '../../../hooks/useAuth';
import { useRouter } from 'next/router';
import { googleConnexionUseCase } from '../../../usecases';
import { facebookConnexionUseCase } from '../../../usecases';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(signupPageStyle);

const LoginWithOtherAccount: React.FC = (): React.ReactElement => {
  const classes = useStyles();
  const auth = useAuth();
  const router = useRouter();

  return (
    <div className={classes.textCenter}>
      <Button
        justIcon
        round
        color="facebook"
        onClick={() => facebookConnexionUseCase(auth, router)}>
        <i className={classes.socials + ' fab fa-facebook-f'} />
      </Button>
      <Button justIcon round color="google" onClick={() => googleConnexionUseCase(auth, router)}>
        <i className={classes.socials + ' fab fa-google'} />
      </Button>
    </div>
  );
};

export default LoginWithOtherAccount;
