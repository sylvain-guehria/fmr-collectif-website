import React from 'react';
import Button from '../../CustomButtons/Button';
import { makeStyles } from '@material-ui/core/styles';
import signupPageStyle from '../../../styles/jss/nextjs-material-kit-pro/pages/signupPageStyle.js';
import { loginGoogle } from '../../../api/auth/firebase';

const useStyles = makeStyles(signupPageStyle);

const LoginWithOtherAccount: React.FC = (): React.ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.socialLine}>
      <Button
        justIcon
        color="transparent"
        className={classes.iconButtons}
        onClick={(e: Event) => e.preventDefault()}>
        <i className="fab fa-facebook" />
      </Button>
      <Button
        justIcon
        color="transparent"
        className={classes.iconButtons}
        onClick={() => loginGoogle()}>
        <i className="fab fa-google-plus-g" />
      </Button>
    </div>
  );
};

export default LoginWithOtherAccount;
