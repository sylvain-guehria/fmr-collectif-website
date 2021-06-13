import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import Favorite from "@material-ui/icons/Favorite";
import Fingerprint from "@material-ui/icons/Fingerprint";
import PersonAdd from "@material-ui/icons/PersonAdd";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
// import LoadingLayer from "components/LoadingLayer/LoadingLayer";
import LoginWithEmailForm from '../components/forms/login/LoginWithEmailForm'
import LoginWithOtherAccount from '../components/forms/login/LoginWithOtherAccount'

import loginPageStyle from "styles/jss/nextjs-material-kit-pro/pages/loginPageStyle.js";

//auth
// import { withAuthUser, AuthAction } from 'next-firebase-auth'

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
          backgroundSize: "cover",
          backgroundPosition: "top center",
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
                  <p className={classes.description + " " + classes.textCenter}>
                    ou avec un email
                  </p>

                  <LoginWithEmailForm />

                </div>
                  <CardBody signup>
                    <CustomInput
                      id="email"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        placeholder: "Email...",
                        type: "email",
                        startAdornment: (
                          <InputAdornment position="start">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      id="pass"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        placeholder: "Password",
                        type: "password",
                        startAdornment: (
                          <InputAdornment position="start">
                            <Icon className={classes.inputIconsColor}>
                              lock_utline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                      }}
                    />
                  </CardBody>
                  <div className={classes.textCenter}>
                    <Button simple color="rose" size="lg">
                      <Fingerprint className={classes.dropdownIcons} /> Se connecter
                    </Button><br />
                    <Link href="/signup">
                      <Button simple color="rose" size="lg">
                        <PersonAdd className={classes.dropdownIcons} /> S'inscrire
                    </Button>
                    </Link>
                  </div>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

export default LoginPage

//When I will need to redirect user when logged In
// export default withAuthUser({
//   whenAuthed: AuthAction.REDIRECT_TO_APP,
//   whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
//   whenUnauthedAfterInit: AuthAction.RENDER,
//   LoaderComponent: LoadingLayer,
// })(LoginPage)
