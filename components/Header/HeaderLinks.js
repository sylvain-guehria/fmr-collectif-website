import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNotification } from '../../hooks/useNotification';
import headerItems from './headerItems';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CustomDropdown from 'components/lib/CustomDropdown/CustomDropdown.js';
import LoginButton from '../LoginButton/LoginButton';
import styles from 'styles/jss/nextjs-material-kit-pro/components/headerLinksStyle.js';

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {

  const auth = useAuth();
  const AuthUser = auth?.user;
  const notifs = useNotification();
  const notifications = notifs.notifications;

  const countTabNotification = (tab) => {
    const numberOfNotificationPerPages = Object.values(notifications[tab]);
    const summerReducer = (accumulator, curr) => accumulator + curr;
    return numberOfNotificationPerPages.reduce(summerReducer);
  };
  const { dropdownHoverColor } = props;
  const classes = useStyles();
  return (
    <List className={classes.list + ' ' + classes.mlAuto}>
      {headerItems.map((item) => {
        if (item.needsAuth && !AuthUser) return null;
        if (item.adminOnly && !AuthUser.isAdmin()) return null;
        return <ListItem className={classes.listItem} key={item.label}>
          <CustomDropdown
            noLiPadding
            navDropdown
            hoverColor={dropdownHoverColor}
            buttonText={item.label}
            buttonProps={{
              className: classes.navLink,
              color: 'transparent'
            }}
            buttonIcon={item.buttonIcon}
            tabNotificationCounter={countTabNotification(item.notificationName)}
            dropdownList={
              item.pages.map((page) => {
                return <Link href={page.href} key={page.label}>
                  <a className={classes.dropdownLink}>
                    <div className={classes.dropdownIcons} >{page.icon}</div>
                    {page.label}
                  </a>
                </Link>;
              })}
          />
        </ListItem>;
      })}
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
