import React from 'react';

import EventComponent from '../components/Event/Event';
import { buildGuestOrLoggedInLayout } from '../components/Layouts/layoutBuilder';

const Event = ()=> {
  return <EventComponent />;
};

Event.getLayout = buildGuestOrLoggedInLayout();
export default Event;
