import React from 'react';

import BecomeAmbassadorComponent from '../components/BecomeAmbassador/Become-ambassador';
import { buildGuestOrLoggedInLayout } from '../components/Layouts/layoutBuilder';

const BecomeAmbassador: React.FC = () => {
  return <BecomeAmbassadorComponent />;
};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
BecomeAmbassador.getLayout = buildGuestOrLoggedInLayout();
export default BecomeAmbassador;
