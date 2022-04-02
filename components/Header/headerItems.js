import React from 'react';

import Apps from '@mui/icons-material/Apps';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import ShoppingBasket from '@mui/icons-material/ShoppingBasket';
import LineStyle from '@mui/icons-material/LineStyle';
import AccountBalance from '@mui/icons-material/AccountBalance';
import ArtTrack from '@mui/icons-material/ArtTrack';
import Store from '@mui/icons-material/Store';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Call from '@mui/icons-material/Call';
import Dns from '@mui/icons-material/Dns';
import Build from '@mui/icons-material/Build';
import People from '@mui/icons-material/People';

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
