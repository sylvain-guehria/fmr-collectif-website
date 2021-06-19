import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// core components
import Header from 'components/Header/Header.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
// import LoadingLayer from "components/LoadingLayer/LoadingLayer";
import LoginWithEmailForm from '../components/forms/login/LoginWithEmailForm';
import LoginWithOtherAccount from '../components/forms/login/LoginWithOtherAccount';

import loginPageStyle from 'styles/jss/nextjs-material-kit-pro/pages/loginPageStyle.js';

const useStyles = makeStyles(loginPageStyle);

const LoginPage = () => {

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
        brand="Connectez vous et profitez de...?"
        links={<HeaderLinks dropdownHoverColor="info" />}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'top center'
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={8} md={4}>
              <Card>
                <div className={classes.form}>
                  <CardHeader
                    color="rose"
                    signup
                    className={classes.cardHeader}
                  >
                    <h4 className={classes.cardTitle}>Se connecter avec</h4>

                    <LoginWithOtherAccount />

                  </CardHeader>
                  <p className={classes.description + ' ' + classes.textCenter}>
                    ou avec un email
                  </p>

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

export default LoginPage;
