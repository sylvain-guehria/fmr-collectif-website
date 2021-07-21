import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// core components
import Header from 'components/Header/Header.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import SectionContacts from 'pages-sections/sections-page/SectionContacts.js';

import contactUsStyle from 'styles/jss/nextjs-material-kit-pro/pages/contactUsStyle.js';

const useStyles = makeStyles(contactUsStyle);

const ContactUsPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        color="transparent"
        brand="Accueil Fmr"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        changeColorOnScroll={{
          height: 300,
          color: 'info',
        }}
      />
      <div className={classes.main}>
        <SectionContacts id="contacts" />
      </div>
    </div>
  );
};
export default ContactUsPage;