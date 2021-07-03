import React from 'react';
import Button from '../../lib/CustomButtons/Button';
import { makeStyles } from '@material-ui/core/styles';
import signupPageStyle from '../../../styles/jss/nextjs-material-kit-pro/pages/signupPageStyle.js';
import { useAuth } from '../../../auth/useAuth';
import { useRouter } from 'next/router';
import { googleConnexionUseCase } from '../../../usecases';
import { facebookConnexionUseCase } from '../../../usecases';

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
        className={classes.iconButtons}
        onClick={() => facebookConnexionUseCase(auth, router)}>
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
