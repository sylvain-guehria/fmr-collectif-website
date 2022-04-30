import React from 'react';

import AboutUsComponent from '../components/AboutUs/About-us';
import { buildGuestOrLoggedInLayout } from '../components/Layouts/layoutBuilder';

const About = ()=> {
  return <AboutUsComponent />;
};

About.getLayout = buildGuestOrLoggedInLayout();
export default About;
