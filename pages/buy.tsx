import React from 'react';

import Buy from '../components/BuySteps/Buy';
import { buildLoggedInOnlyLayout } from '../components/Layouts/layoutBuilder';

type Props = {
  clientSecret: string;
};

const BuyPage: React.FC<Props> = () => {
  return <Buy />;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
BuyPage.getLayout = buildLoggedInOnlyLayout();
export default BuyPage;
