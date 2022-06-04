import React from 'react';

import ContactUsComponent from '../components/ContactUs/Contact-us';
import { buildGuestOrLoggedInLayout } from '../components/Layouts/layoutBuilder';

const ContactUs = ()=> {
  return <ContactUsComponent />;
};

ContactUs.getLayout = buildGuestOrLoggedInLayout();
export default ContactUs;
