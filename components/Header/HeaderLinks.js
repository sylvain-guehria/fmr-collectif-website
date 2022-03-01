import React, { useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNotification } from '../../hooks/useNotification';
import { useBoutique } from '../../hooks/useBoutique';
import headerItems from './headerItems';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CustomDropdown from 'components/lib/CustomDropdown/CustomDropdown.js';
import LoginButton from '../LoginButton/LoginButton';
import styles from 'styles/jss/nextjs-material-kit-pro/components/headerLinksStyle.js';
import { countTabNotification, fromHrefToCamelCase } from './headerUtils';

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {

  const { user } = useAuth();
  const { notifications, setShoppingCartNotifications } = useNotification();
  const { boutiques } = useBoutique();

  const { dropdownHoverColor } = props;
  const classes = useStyles();

  useEffect(() => {
    if (setShoppingCartNotifications) setShoppingCartNotifications(boutiques.items.length + boutiques.tickets.length);
  }, [boutiques.items.length, boutiques.tickets.length]);

  return (
    <List className={classes.list + ' ' + classes.mlAuto}>
      {headerItems.map((item) => {
        if (item.needsAuth && !user) return null;
        if (item.adminOnly && !user.isAdmin()) return null;
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
            hasNotification={countTabNotification(item.tab, notifications) > 0}
            dropdownList={
              item.pages.map((page) => {
                const numberNotification = notifications[item.tab][fromHrefToCamelCase(page.href)];
                return <Link href={page.href} key={page.label}>
                  <a className={classes.dropdownLink}>
                    <div className={classes.dropdownIcons} >{page.icon} </div>
                    <div className={classes.dropdownNotifications} > {numberNotification > 0 ? numberNotification : null}</div>
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
