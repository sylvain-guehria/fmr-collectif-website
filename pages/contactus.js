import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from 'components/Header/Header.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import SectionContacts from 'pages-sections/sections-page/SectionContacts.js';

import sectionsPageStyle from 'styles/jss/nextjs-material-kit-pro/pages/sectionsPageStyle.js';

const useStyles = makeStyles(sectionsPageStyle);

export default function contactus() {
  const classes = useStyles();
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  return (
    <div>
      <Header
        color="transparent"
        brand="Accueil Fmr"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        changeColorOnScroll={{
          height: 300,
          color: 'info'
        }}
      />
      <div className={classes.main}>
        <SectionContacts id="contacts" />
      </div>
    </div>
  );
}
