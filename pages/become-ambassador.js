import React from 'react';

import BecomeAmbassadorComponent from '../components/GuestAndLoggedinPages/Become-ambassador';
import { buildGuestOrLoggedInLayout } from '../components/Layouts/layoutBuilder';

const BecomeAmbassador = ()=> {
  return <BecomeAmbassadorComponent />;
};

BecomeAmbassador.getLayout = buildGuestOrLoggedInLayout();
export default BecomeAmbassador;
