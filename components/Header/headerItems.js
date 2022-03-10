import React from 'react';

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

const headerItems = [
  {
    label: "L'association",
    buttonIcon: AccountBalance,
    tab: 'association',
    pages: [
      {
        href: '/about-us',
        label: 'Qui somme nous',
        icon: <ArtTrack />
      },
      {
        href: '/become-ambassador',
        label: 'Devenir membre',
        icon: <PersonAdd />
      },
      {
        href: '/contact-us',
        label: 'Nous contacter',
        icon: <Call />
      }
    ]
  },
  {
    label: 'Evènements',
    buttonIcon: Apps,
    tab: 'evenements',
    pages: [
      {
        href: '/blog-posts',
        label: 'Le blog',
        icon: <ArtTrack />
      },
      {
        href: '/events',
        label: 'Les évènements',
        icon: <Dns />
      }
    ]
  },
  {
    label: 'Boutique',
    buttonIcon: Store,
    tab: 'boutique',
    pages: [
      {
        href: '/ticket-office',
        label: 'Billeterie',
        icon: <LineStyle />
      },
      {
        href: '/shop',
        label: 'Shop',
        icon: <ShoppingBasket />
      },
      {
        href: '/shopping-cart',
        label: 'Panier',
        icon: <ShoppingCart />
      }
    ]
  },
  {
    label: 'Compte',
    needsAuth: true,
    buttonIcon: AccountCircle,
    tab: 'compte',
    pages: [
      {
        href: '/profile',
        label: 'Mon compte',
        icon: <LineStyle />
      },
      {
        href: '/orders',
        label: 'Billets / achats',
        icon: <ShoppingBasket />
      }
    ]
  },
  {
    label: 'Admin',
    needsAuth: true,
    adminOnly: true,
    buttonIcon: Build,
    tab: 'admin',
    pages: [
      {
        href: '/admin/users',
        label: 'Utilisateurs',
        icon: <People />
      },
      {
        href: '/admin/stocks',
        label: 'Stocks',
        icon: <Dns />
      },
      {
        href: '/admin/tickets',
        label: 'Tickets',
        icon: <LineStyle />
      }
    ]
  }
];

export default headerItems;
