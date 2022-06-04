import React from 'react';

import ShoppingCartComponent from '../components/ShoppingCart/Shopping-cart';
import { buildGuestOrLoggedInLayout } from '../components/Layouts/layoutBuilder';

const ShoppingCart = ()=> {
  return <ShoppingCartComponent />;
};

ShoppingCart.getLayout = buildGuestOrLoggedInLayout();
export default ShoppingCart;
