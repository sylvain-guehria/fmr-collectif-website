import React from 'react';

import Buy from '../components/GuestAndLoggedinPages/Buy';
import { buildLoggedInOnlyLayout } from '../components/Layouts/layoutBuilder';

const BuyPage: React.FC = () => {
  return <Buy />;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
BuyPage.getLayout = buildLoggedInOnlyLayout();
export default BuyPage;
