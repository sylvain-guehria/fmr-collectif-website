import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer/Footer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Favorite from '@material-ui/icons/Favorite';
import SocialMediaLinks from '../SocialMedia/SocialMediaIconLinks';
import footerStyle from 'styles/jss/nextjs-material-kit-pro/pages/componentsSections/footerStyle.js';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(footerStyle);

const GuestOrLoggedInLayout: React.FC = ({ children }): React.ReactElement => {
  const classes = useStyles();
  return (
    <>
      {children}
      <Footer
        // theme="white"
        content={
          <div>
            <div className={classes.left}>
              <a href="#" target="_blank" className={classes.footerBrand} rel="noreferrer">
                FMR collectif, l&apos;association <Favorite color={'error'} />
              </a>
            </div>
            <div className={classes.pullCenter}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a href="#" target="_blank" className={classes.block} rel="noreferrer">
                    guest or logged
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="#" target="_blank" className={classes.block} rel="noreferrer">
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="#" className={classes.block}>
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="#" target="_blank" className={classes.block} rel="noreferrer">
                    Licenses
                  </a>
                </ListItem>
              </List>
            </div>
            <SocialMediaLinks />
          </div>
        }
      />
    </>
  );
};
GuestOrLoggedInLayout.propTypes = {
  children: PropTypes.node,
};

export default GuestOrLoggedInLayout;
