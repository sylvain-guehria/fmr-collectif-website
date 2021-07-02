import React from 'react';
// import logger from '../../modules/logger/logger';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Hidden from '@material-ui/core/Hidden';
import Fingerprint from '@material-ui/icons/Fingerprint';
import Button from '../../components/CustomButtons/Button';
import { useAuth } from '../../auth/useAuth';

import styles from 'styles/jss/nextjs-material-kit-pro/components/headerLinksStyle.js';

const useStyles = makeStyles(styles);

const LoginButton: React.FC<unknown> = () => {
  const auth = useAuth();
  const classes = useStyles();
  const AuthUser = auth.user;

  return (
    <>
      {!AuthUser ? (
        <ListItem className={classes.listItem}>
          <Hidden mdDown>
            <Link href="/login">
              <a className={classes.dropdownLink}>
                <Button
                  color={'transparent'}
                  target="_blank"
                  className={classes.loginButton}
                  size={'sm'}>
                  {
                    <>
                      <Fingerprint /> Se connecter
                    </>
                  }
                </Button>
              </a>
            </Link>
          </Hidden>
          <Hidden mdUp>
            <Link href="/login">
              <a className={classes.dropdownLink}>
                <Button color={'transparent'} size={'sm'} className={classes.loginButton}>
                  {
                    <>
                      <Fingerprint /> {'Se connecter'}
                    </>
                  }
                </Button>
              </a>
            </Link>
          </Hidden>
        </ListItem>
      ) : (
        <a className={classes.dropdownLink}>
          <Button
            className={classes.loginButton}
            color={'transparent'}
            size={'sm'}
            onClick={() => {
              auth.signout();
            }}>
            {
              <>
                <Fingerprint /> Se déconnecter{' '}
              </>
            }
          </Button>
        </a>
      )}
    </>
  );
};

export default LoginButton;
