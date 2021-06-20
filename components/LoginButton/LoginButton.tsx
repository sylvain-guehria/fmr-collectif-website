import React from 'react';
// import logger from '../../modules/logger/logger';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Hidden from '@material-ui/core/Hidden';
import Fingerprint from '@material-ui/icons/Fingerprint';
import Button from '../../components/CustomButtons/Button';
import { useAuth } from '../../aaapi/auth/useAuth';

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
                      <Fingerprint className={classes.icons} /> Se connecter
                    </>
                  }
                </Button>
              </a>
            </Link>
          </Hidden>
          <Hidden mdUp>
            <Button color={'info'} target="_blank" className={classes.navButton} round>
              {
                <>
                  <Fingerprint className={classes.icons} /> Se connecter{' '}
                </>
              }
            </Button>
          </Hidden>
        </ListItem>
      ) : (
        <Button
          color={'white'}
          target="_blank"
          className={classes.navButton}
          round
          onClick={() => {
            auth.signout();
          }}>
          {
            <>
              <Fingerprint className={classes.icons} /> Se déconnecter{' '}
            </>
          }
        </Button>
      )}
    </>
  );
};

export default LoginButton;