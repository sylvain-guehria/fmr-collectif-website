import React from 'react';

import OrdersComponent from '../components/LoggedIn/Orders';
import { buildLoggedInOnlyLayout } from '../components/Layouts/layoutBuilder';

const OrdersPage = ()=> {
  return <OrdersComponent />;
};

OrdersPage.getLayout = buildLoggedInOnlyLayout();
export default OrdersPage;
