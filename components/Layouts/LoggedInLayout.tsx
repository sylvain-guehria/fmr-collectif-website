import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer/Footer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Favorite from '@material-ui/icons/Favorite';

import footerStyle from 'styles/jss/nextjs-material-kit-pro/pages/componentsSections/footerStyle.js';

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
                  <a
                    href="https://www.creative-tim.com/?ref=njsmkp-shopping-cart"
                    target="_blank"
                    className={classes.block}
                    rel="noreferrer">
                    Creative Tim
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/home?ref=njsmkp-shopping-cart"
                    target="_blank"
                    className={classes.block}
                    rel="noreferrer">
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>LoggedInLayout</ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/license?ref=njsmkp-shopping-cart"
                    target="_blank"
                    className={classes.block}
                    rel="noreferrer">
                    Licenses
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getDate()} , made with <Favorite className={classes.icon} />{' '}
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
