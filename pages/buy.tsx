import React from 'react';

import Buy from '../components/GuestAndLoggedinPages/Buy';
import { buildLoggedInOnlyLayout } from '../components/Layouts/layoutBuilder';

type Props = {
  clientSecret: string;
};

const BuyPage: React.FC<Props> = ({ clientSecret }) => {
  return <Buy clientSecret={clientSecret} />;
};

export async function getServerSideProps() {
  const clientSecret = process.env.STRIPE_SECRET_KEY;
  return { props: { clientSecret: clientSecret } };
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
BuyPage.getLayout = buildLoggedInOnlyLayout();
export default BuyPage;
