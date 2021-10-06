/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React from 'react';
import { useAuth } from '../../hooks/useAuth';

import PropTypes from 'prop-types';
// react components for routing our app without refresh
import Link from 'next/link';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

// @material-ui/icons
import Apps from '@material-ui/icons/Apps';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import LineStyle from '@material-ui/icons/LineStyle';
import AccountBalance from '@material-ui/icons/AccountBalance';
import ArtTrack from '@material-ui/icons/ArtTrack';
import Store from '@material-ui/icons/Store';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PersonAdd from '@material-ui/icons/PersonAdd';
import Call from '@material-ui/icons/Call';
import Dns from '@material-ui/icons/Dns';

import Build from '@material-ui/icons/Build';
import People from '@material-ui/icons/People';

import CustomDropdown from 'components/lib/CustomDropdown/CustomDropdown.js';
import LoginButton from '../LoginButton/LoginButton';

import styles from 'styles/jss/nextjs-material-kit-pro/components/headerLinksStyle.js';

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {

  const auth = useAuth();
  const AuthUser = auth?.user;
  const { dropdownHoverColor } = props;
  const classes = useStyles();
  return (
    <List className={classes.list + ' ' + classes.mlAuto}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="L'association"
          buttonProps={{
            className: classes.navLink,
            color: 'transparent'
          }}
          buttonIcon={AccountBalance}
          dropdownList={[
            <Link href="/about-us">
              <a className={classes.dropdownLink}>
                <ArtTrack className={classes.dropdownIcons} /> Qui somme nous
              </a>
            </Link>,
            <Link href="/become-ambassador">
              <a className={classes.dropdownLink}>
                <PersonAdd className={classes.dropdownIcons} />
                   Devenir membre
                    </a>
            </Link>,
            <Link href="/contact-us">
              <a className={classes.dropdownLink}>
                <Call className={classes.dropdownIcons} />
                  Nous contacter
                   </a>
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="Evènements"
          buttonProps={{
            className: classes.navLink,
            color: 'transparent'
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link href="/blog-posts">
              <a className={classes.dropdownLink}>
                <ArtTrack className={classes.dropdownIcons} /> Le blog
                {/* cliquer un blog ouvre blog-post */}
              </a>
            </Link>,
            <Link href="/events">
              <a className={classes.dropdownLink}>
                {/* cliquer un event ouvre blog-post */}
                <Dns className={classes.dropdownIcons} /> Les évènements
              </a>
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="Boutique"
          buttonProps={{
            className: classes.navLink,
            color: 'transparent'
          }}
          buttonIcon={Store}
          dropdownList={[
            <Link href="/ticket-office">
              <a className={classes.dropdownLink}>
                <LineStyle className={classes.dropdownIcons} />
                 Billeterie
              </a>
            </Link>,
            <Link href="/shop">
              <a className={classes.dropdownLink}>
                <ShoppingBasket className={classes.dropdownIcons} />
                Shop
              </a>
            </Link>,
            <Link href="/shopping-cart">
              <a className={classes.dropdownLink}>
                <ShoppingCart className={classes.dropdownIcons} />
                Panier
              </a>
            </Link>
          ]}
        />
      </ListItem>
      {AuthUser && <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="Compte"
          buttonProps={{
            className: classes.navLink,
            color: 'transparent'
          }}
          buttonIcon={AccountCircle}
          dropdownList={[
            <Link href="/profile">
              <a className={classes.dropdownLink}>
                <LineStyle className={classes.dropdownIcons} />
                 Mon compte
              </a>
            </Link>,
            <Link href="/orders">
              <a className={classes.dropdownLink}>
                <ShoppingBasket className={classes.dropdownIcons} />
                Billets / achats
              </a>
            </Link>
          ]}
        />
      </ListItem>}
      {(AuthUser && AuthUser.isAdmin()) && <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="Admin"
          buttonProps={{
            className: classes.navLink,
            color: 'transparent'
          }}
          buttonIcon={Build}
          dropdownList={[
            <Link href="/admin/users">
              <a className={classes.dropdownLink}>
                <People className={classes.dropdownIcons} />
                 Utilisateurs
              </a>
            </Link>,
            <Link href="/admin/stocks">
              <a className={classes.dropdownLink}>
                <People className={classes.dropdownIcons} />
                Stocks
             </a>
            </Link>
          ]}
        />
      </ListItem>}
      <ListItem className={classes.listItem}>
        <LoginButton />
      </ListItem>
    </List>
  );
}

HeaderLinks.defaultProps = {
  hoverColor: 'primary'
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    'dark',
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'rose',
    'light'
  ])
};
