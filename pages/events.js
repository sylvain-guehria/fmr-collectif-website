import React from 'react';

import EventsComponent from '../components/Event/Events';
import { buildGuestOrLoggedInLayout } from '../components/Layouts/layoutBuilder';

const Events = ()=> {
  return <EventsComponent />;
};

Events.getLayout = buildGuestOrLoggedInLayout();
export default Events;
