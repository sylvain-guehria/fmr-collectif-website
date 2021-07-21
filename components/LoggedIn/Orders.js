/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/lib/Grid/GridContainer.js";
import GridItem from "components/lib/Grid/GridItem.js";
import Parallax from "components/lib/Parallax/Parallax.js";
import OrderHistory from './OrderHistory';

import styles from "styles/jss/nextjs-material-kit-pro/pages/ecommerceStyle.js";

const useStyles = makeStyles(styles);

export default function Orders() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="Accueil Fmr"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: "info",
        }}
      />
      <Parallax image="/img/examples/clark-street-merc.jpg" filter="dark" small>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <div className={classes.brand}>
                <h1 className={classes.title}>Vos achats</h1>
                <h4>
                Retrouvez ici vos commandes et billets d'entrés
                </h4>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <OrderHistory />
    </div>
  );
}
