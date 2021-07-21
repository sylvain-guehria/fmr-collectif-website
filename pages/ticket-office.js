import React from 'react';

import TicketOfficeComponent from '../components/GuestAndLoggedinPages/Ticket-office';
import { buildGuestOrLoggedInLayout } from '../components/Layouts/layoutBuilder';

const TicketOffice = ()=> {
  return <TicketOfficeComponent />;
};

TicketOffice.getLayout = buildGuestOrLoggedInLayout();
export default TicketOffice;
