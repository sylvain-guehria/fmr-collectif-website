import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// core components
import Header from 'components/Header/Header.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import Parallax from 'components/lib/Parallax/Parallax.js';
import GridContainer from 'components/lib/Grid/GridContainer.js';
import GridItem from 'components/lib/Grid/GridItem.js';

import shoppingCartStyle from 'styles/jss/nextjs-material-kit-pro/pages/shoppingCartStyle.js';
import ShoppingCartTable from '../ShoppingCart/ShoppingCartTable';

const useStyles = makeStyles(shoppingCartStyle);

const ShoppingCart: React.FC = () => {
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
          color: 'info',
        }}
      />

      <Parallax image="/img/examples/bg2.jpg" filter="dark" small>
        <div className={classes.container}>
          <GridContainer>
            <GridItem className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}>
              <h2 className={classes.title}>Panier</h2>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ShoppingCartTable />
        </div>
      </div>
    </div>
  );
};
export default ShoppingCart;
