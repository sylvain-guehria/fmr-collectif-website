import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer/Footer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Favorite from '@mui/icons-material/Favorite';

import footerStyle from 'styles/jss/nextjs-material-kit-pro/pages/componentsSections/footerStyle';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(footerStyle);

const LoggedInLayout: React.FC = ({ children }): React.ReactElement => {
  const classes = useStyles();
  return (
    <>
      {children}
      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a href="#" target="_blank" className={classes.block} rel="noreferrer">
                    Fmr
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="#" target="_blank" className={classes.block} rel="noreferrer">
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="#" target="_blank" className={classes.block} rel="noreferrer">
                    LoggedIn
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="#" target="_blank" className={classes.block} rel="noreferrer">
                    Licenses
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              &copy; {2000 + new Date().getDate()} , made with <Favorite className={classes.icon} />{' '}
              by Sylvain
            </div>
          </div>
        }
      />
    </>
  );
};
LoggedInLayout.propTypes = {
  children: PropTypes.node,
};

export default LoggedInLayout;
