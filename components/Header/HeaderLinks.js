/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React from 'react';
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

import ViewDay from '@material-ui/icons/ViewDay';
import Build from '@material-ui/icons/Build';
import ListIcon from '@material-ui/icons/List';
import People from '@material-ui/icons/People';
import Assignment from '@material-ui/icons/Assignment';
import MonetizationOn from '@material-ui/icons/MonetizationOn';
import Chat from '@material-ui/icons/Chat';
import ViewCarousel from '@material-ui/icons/ViewCarousel';

import ViewQuilt from '@material-ui/icons/ViewQuilt';
import LocationOn from '@material-ui/icons/LocationOn';
import Fingerprint from '@material-ui/icons/Fingerprint';
import AttachMoney from '@material-ui/icons/AttachMoney';
import Icon from '@material-ui/core/Icon';

import Layers from '@material-ui/icons/Layers';

import Error from '@material-ui/icons/Error';

// core components
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.js';
import LoginButton from '../LoginButton/LoginButton';

import styles from 'styles/jss/nextjs-material-kit-pro/components/headerLinksStyle.js';

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const smoothScroll = (e, target) => {
    if (window.location.pathname === '/sections') {
      var isMobile = navigator.userAgent.match(
        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
      );
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        var targetScroll = document.getElementById(target);
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
      }
    }
  };
  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function () {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };
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
            <Link href="/pricing">
              <a className={classes.dropdownLink}>
                <PersonAdd className={classes.dropdownIcons} />
                   Devenir membre
                    </a>
            </Link>,
             <Link href="/contactus">
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
            <Link href="/ticketoffice">
              <a className={classes.dropdownLink}>
                <LineStyle className={classes.dropdownIcons} />
                 Billeterie
              </a>
            </Link>,
            <Link href="/ecommerce">
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
      {/* if connected */}
      <ListItem className={classes.listItem}>
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
            <Link href="/ecommerce">
              <a className={classes.dropdownLink}>
                <ShoppingBasket className={classes.dropdownIcons} />
                Billets / achats
              </a>
            </Link>
          ]}
        />
      </ListItem>
      {/* delete */}
       {/* <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="Sections"
          buttonProps={{
            className: classes.navLink,
            color: 'transparent'
          }}
          buttonIcon={ViewDay}
          dropdownList={[
            <Link href="/sections#headers">
              <a
                className={classes.dropdownLink}
                onClick={(e) => smoothScroll(e, 'headers')}
              >
                <Dns className={classes.dropdownIcons} /> Headers
              </a>
            </Link>,
            <Link href="/sections#features">
              <a
                className={classes.dropdownLink}
                onClick={(e) => smoothScroll(e, 'features')}
              >
                <Build className={classes.dropdownIcons} /> Features
              </a>
            </Link>,
            <Link href="/sections#blogs">
              <a
                className={classes.dropdownLink}
                onClick={(e) => smoothScroll(e, 'blogs')}
              >
                <ListIcon className={classes.dropdownIcons} /> Blogs
              </a>
            </Link>,
            <Link href="/sections#teams">
              <a
                className={classes.dropdownLink}
                onClick={(e) => smoothScroll(e, 'teams')}
              >
                <People className={classes.dropdownIcons} /> Teams
              </a>
            </Link>,
            <Link href="/sections#projects">
              <a
                className={classes.dropdownLink}
                onClick={(e) => smoothScroll(e, 'projects')}
              >
                <Assignment className={classes.dropdownIcons} /> Projects
              </a>
            </Link>,
            <Link href="/sections#pricing">
              <a
                className={classes.dropdownLink}
                onClick={(e) => smoothScroll(e, 'pricing')}
              >
                <MonetizationOn className={classes.dropdownIcons} /> Pricing
              </a>
            </Link>,
            <Link href="/sections#testimonials">
              <a
                className={classes.dropdownLink}
                onClick={(e) => smoothScroll(e, 'testimonials')}
              >
                <Chat className={classes.dropdownIcons} /> Testimonials
              </a>
            </Link>,
            <Link href="/sections#contacts">
              <a
                className={classes.dropdownLink}
                onClick={(e) => smoothScroll(e, 'contacts')}
              >
                <Call className={classes.dropdownIcons} /> Contacts
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
          buttonText="Examples"
          buttonProps={{
            className: classes.navLink,
            color: 'transparent'
          }}
          buttonIcon={ViewCarousel}
          dropdownList={[
            <Link href="/about-us">
              <a className={classes.dropdownLink}>
                <AccountBalance className={classes.dropdownIcons} /> About Us
              </a>
            </Link>,
            <Link href="/blog-post">
              <a className={classes.dropdownLink}>
                <ArtTrack className={classes.dropdownIcons} /> Blog Post
              </a>
            </Link>,
            <Link href="/blog-posts">
              <a className={classes.dropdownLink}>
                <ViewQuilt className={classes.dropdownIcons} /> Blog Posts
              </a>
            </Link>,
            <Link href="/contact-us">
              <a className={classes.dropdownLink}>
                <LocationOn className={classes.dropdownIcons} /> Contact Us
              </a>
            </Link>,
            <Link href="/landing-page">
              <a className={classes.dropdownLink}>
                <ViewDay className={classes.dropdownIcons} /> Landing Page
              </a>
            </Link>,
            <Link href="/login">
              <a className={classes.dropdownLink}>
                <Fingerprint className={classes.dropdownIcons} /> Login Page
              </a>
            </Link>,
            <Link href="/pricing">
              <a className={classes.dropdownLink}>
                <AttachMoney className={classes.dropdownIcons} /> Pricing Page
              </a>
            </Link>,
            <Link href="/shopping-cart">
              <a className={classes.dropdownLink}>
                <ShoppingBasket className={classes.dropdownIcons} /> Shopping
                Cart
              </a>
            </Link>,
            <Link href="/ecommerce">
              <a className={classes.dropdownLink}>
                <Store className={classes.dropdownIcons} /> Ecommerce Page
              </a>
            </Link>,
            <Link href="/product">
              <a className={classes.dropdownLink}>
                <ShoppingCart className={classes.dropdownIcons} /> Product Page
              </a>
            </Link>,
            <Link href="/profile">
              <a className={classes.dropdownLink}>
                <AccountCircle className={classes.dropdownIcons} /> Profile Page
              </a>
            </Link>,
            <Link href="/signup">
              <a className={classes.dropdownLink}>
                <PersonAdd className={classes.dropdownIcons} /> Signup Page
              </a>
            </Link>,
            <Link href="/error-page">
              <a className={classes.dropdownLink}>
                <Error className={classes.dropdownIcons} /> Error Page
              </a>
            </Link>
          ]}
        />
      </ListItem> */}
      {/* stop delete */}

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
