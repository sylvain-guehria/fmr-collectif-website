import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// core components
import Header from 'components/Header/Header.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import GridContainer from 'components/lib/Grid/GridContainer.js';
import GridItem from 'components/lib/Grid/GridItem.js';
import Parallax from 'components/lib/Parallax/Parallax.js';
import BuySteps from '../BuySteps/BuySteps';

import styles from 'styles/jss/nextjs-material-kit-pro/pages/ecommerceStyle.js';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(styles);

const Buy: React.FC = () => {
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
          color: 'info',
        }}
      />
      <Parallax image="/img/examples/clark-street-merc.jpg" filter="dark" small>
        <div className={classes.container}>
          <GridContainer>
            <GridItem className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}>
              <div className={classes.brand}>
                <h1 className={classes.title}>Pour finaliser votre commande</h1>
                <h4>Suivez les étapes ci-dessous</h4>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes.container}>
        <BuySteps />
      </div>
    </div>
  );
};
export default Buy;
