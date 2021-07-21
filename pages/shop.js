import React from 'react';

import ShopComponent from '../components/GuestAndLoggedinPages/Shop';
import { buildGuestOrLoggedInLayout } from '../components/Layouts/layoutBuilder';

const Shop = ()=> {
  return <ShopComponent />;
};

Shop.getLayout = buildGuestOrLoggedInLayout();
export default Shop;
