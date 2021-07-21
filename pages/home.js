import React from 'react';

import HomepageComponent from '../components/GuestAndLoggedinPages/Home';
import { buildGuestOrLoggedInLayout } from '../components/Layouts/layoutBuilder';

const HomePage = ()=> {
  return <HomepageComponent />;
};

HomePage.getLayout = buildGuestOrLoggedInLayout();
export default HomePage;
