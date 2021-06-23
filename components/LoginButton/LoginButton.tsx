import React from 'react';
// import logger from '../../modules/logger/logger';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Hidden from '@material-ui/core/Hidden';
import Fingerprint from '@material-ui/icons/Fingerprint';
import Button from '../../components/CustomButtons/Button';
import { useAuth } from '../../api/auth/useAuth';

import styles from 'styles/jss/nextjs-material-kit-pro/components/headerLinksStyle.js';

const useStyles = makeStyles(styles);

const LoginButton: React.FC<unknown> = () => {
  const auth = useAuth();
  const classes = useStyles();
  const AuthUser = auth.user;

  return (
    <>
      {!AuthUser?.email ? (
        <ListItem className={classes.listItem}>
          <Hidden mdDown>
            <Link href="/login">
              <a className={classes.dropdownLink}>
                <Button color={'white'} target="_blank" className={classes.navButton} round>
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
              <Button color={'github'} round>
                {
                  <>
                    <Fingerprint /> Se connecter{' '}
                  </>
                }
              </Button>
            </Link>
          </Hidden>
        </ListItem>
      ) : (
        <Button
          color={'white'}
          round
          onClick={() => {
            auth.signout();
          }}>
          {
            <>
              <Fingerprint /> Se déconnecter{' '}
            </>
          }
        </Button>
      )}
    </>
  );
};

export default LoginButton;
