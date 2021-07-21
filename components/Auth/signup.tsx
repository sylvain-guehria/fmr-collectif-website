import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

// @material-ui/icons
import Timeline from '@material-ui/icons/Timeline';
import Code from '@material-ui/icons/Code';
import Group from '@material-ui/icons/Group';
import Favorite from '@material-ui/icons/Favorite';

// core components
import Header from 'components/Header/Header.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import Footer from 'components/Footer/Footer.js';
import GridContainer from 'components/lib/Grid/GridContainer.js';
import GridItem from 'components/lib/Grid/GridItem.js';
import Card from 'components/lib/Card/Card.js';
import CardBody from 'components/lib/Card/CardBody.js';
import InfoArea from 'components/lib/InfoArea/InfoArea.js';

import signupPageStyle from 'styles/jss/nextjs-material-kit-pro/pages/signupPageStyle.js';

import RegisterForm from '../forms/register/RegisterForm';
import LoginWithOtherAccount from '../forms/login/LoginWithOtherAccount';

const useStyles = makeStyles(signupPageStyle);

const SignUpComponent: React.FC = ({ ...rest }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  const classes = useStyles();

  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Accueil Fmr"
        links={<HeaderLinks dropdownHoverColor="rose" />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1456949037425-4b097bbcc0e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
        }}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={10} md={10}>
              <Card className={classes.cardSignup}>
                <h2 className={classes.cardTitle}>S&apos;inscrire</h2>

                <LoginWithOtherAccount />

                <CardBody>
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={5} md={5}>
                      <RegisterForm />
                    </GridItem>
                    <GridItem xs={12} sm={5} md={5}>
                      <InfoArea
                        className={classes.infoArea}
                        title="Soirées"
                        description="FMR vous propose des soirées dans des lieux variés..."
                        icon={Timeline}
                        iconColor="rose"
                      />
                      <InfoArea
                        className={classes.infoArea}
                        title="Vous retrouver"
                        description="Les soirées sont accessibles à tous."
                        icon={Code}
                        iconColor="primary"
                      />
                      <InfoArea
                        className={classes.infoArea}
                        title="Tarif préférentiels"
                        description="Des boissons et entrées aux soirées à tarif réduit pour les membres"
                        icon={Group}
                        iconColor="info"
                      />
                    </GridItem>
                  </GridContainer>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/?ref=njsmkp-signup"
                      target="_blank"
                      className={classes.block}
                      rel="noreferrer">
                      Creative Tim
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/home?ref=njsmkp-signup"
                      target="_blank"
                      className={classes.block}
                      rel="noreferrer">
                      About us
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="http://blog.creative-tim.com/?ref=njsmkp-signup"
                      className={classes.block}>
                      Blog
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/license?ref=njsmkp-signup"
                      target="_blank"
                      className={classes.block}
                      rel="noreferrer">
                      Licenses
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                &copy; {2000 + new Date().getFullYear()} , made with
                <Favorite className={classes.icon} /> by
                <a
                  href="https://www.creative-tim.com?ref=njsmkp-signup"
                  target="_blank"
                  rel="noreferrer">
                  Creative Tim
                </a>{' '}
                for a better web.
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default SignUpComponent;