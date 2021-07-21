import React from 'react';

import EventsComponent from '../components/GuestAndLoggedinPages/Events';
import { buildGuestOrLoggedInLayout } from '../components/Layouts/layoutBuilder';

const Events = ()=> {
  return <EventsComponent />;
};

Events.getLayout = buildGuestOrLoggedInLayout();
export default Events;
