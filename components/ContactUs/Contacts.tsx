import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Phone from '@mui/icons-material/Phone';
// core components
import GridContainer from 'components/lib/Grid/GridContainer';
import GridItem from 'components/lib/Grid/GridItem';
import InfoArea from 'components/lib/InfoArea/InfoArea';

import contactsStyle from 'styles/jss/nextjs-material-kit-pro/pages/sectionsSections/contactsStyle';
import ContactUsForm from 'components/forms/contactUs/ContactUsForm';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(contactsStyle);

const Contacts: React.FC = () => {
  const classes = useStyles();
  return (
    <div className="cd-section">
      <div
        className={classes.contacts + ' ' + classes.section}
        style={{ backgroundImage: "url('/img/examples/city.jpg')" }}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={5} md={5}>
              <h2 className={classes.title}>Get in Touch</h2>
              <h4 className={classes.description}>
                Vous souhaitez nous contacter ? Que ce soit pour un partenariat, un porblème
                rencontré sur le site ou lors d&apos;un évènement ou bien juste pour prendre de nos
                nouvelles, remplissez ce formulaire et nous serons ravis de vous répondre par email.
              </h4>
              <InfoArea
                className={classes.infoArea}
                title="Nous appeler"
                description={
                  <span>
                    Thibaut Gervasonie
                    <br /> +40 762 321 762
                    <br /> Mon - Fri, 8:00-21:00
                  </span>
                }
                icon={Phone}
              />
            </GridItem>
            <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
              <ContactUsForm />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
