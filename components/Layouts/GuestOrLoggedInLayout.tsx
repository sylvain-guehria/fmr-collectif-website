import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Footer from '../Footer/Footer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Favorite from '@mui/icons-material/Favorite';
import SocialMediaLinks from '../SocialMedia/SocialMediaIconLinks';
import footerStyle from 'styles/jss/nextjs-material-kit-pro/pages/componentsSections/footerStyle';
import Button from './../lib/CustomButtons/Button';

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
              <Link href="/">
                <Button simple color="danger" size="lg">
                  <>
                    FMR collectif, l&apos;association <Favorite color={'error'} />
                  </>
                </Button>
              </Link>
            </div>
            <div className={classes.pullCenter}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a href="/about-us" className={classes.block} rel="noreferrer">
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="/blog-posts" className={classes.block}>
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="#" className={classes.block} rel="noreferrer">
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
