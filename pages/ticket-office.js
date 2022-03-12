import React from 'react';

import TicketOfficeComponent from '../components/TicketOffice/TicketsOffice.tsx';
import { buildGuestOrLoggedInLayout } from '../components/Layouts/layoutBuilder';

const TicketOffice = ()=> {
  return <TicketOfficeComponent />;
};

TicketOffice.getLayout = buildGuestOrLoggedInLayout();
export default TicketOffice;
