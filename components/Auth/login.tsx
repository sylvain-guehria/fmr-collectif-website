import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// core components
import Header from 'components/Header/Header.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import GridContainer from 'components/lib/Grid/GridContainer.js';
import GridItem from 'components/lib/Grid/GridItem.js';
import Card from 'components/lib/Card/Card.js';
import CardHeader from 'components/lib/Card/CardHeader.js';
import LoginWithEmailForm from '../forms/login/LoginWithEmailForm';
import LoginWithOtherAccount from '../forms/login/LoginWithOtherAccount';

import loginPageStyle from 'styles/jss/nextjs-material-kit-pro/pages/loginPageStyle.js';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(loginPageStyle);

const LoginComponent: React.FC = () => {
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
        links={<HeaderLinks dropdownHoverColor="info" />}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
        }}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={8} md={4}>
              <Card>
                <div className={classes.form}>
                  <CardHeader color="gray" signup className={classes.cardHeader}>
                    <h4 className={classes.cardTitle}>Se connecter avec</h4>

                    <LoginWithOtherAccount />
                  </CardHeader>
                  <p className={classes.description + ' ' + classes.textCenter}>ou avec un email</p>

                  <LoginWithEmailForm />
                </div>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
