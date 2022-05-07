import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// core components
import Header from 'components/Header/Header';
import HeaderLinks from 'components/Header/HeaderLinks';
import SectionContacts from 'components/ContactUs/Contacts';
import WorkWithUs from 'components/ContactUs/WorkWithUs';

import contactUsStyle from 'styles/jss/nextjs-material-kit-pro/pages/contactUsStyle';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
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
      <WorkWithUs />
    </div>
  );
};
export default ContactUsPage;
