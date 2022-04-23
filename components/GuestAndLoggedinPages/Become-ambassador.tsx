import React from 'react';
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// core components
import Header from 'components/Header/Header';
import HeaderLinks from 'components/Header/HeaderLinks';
import Parallax from 'components/lib/Parallax/Parallax';
import GridContainer from 'components/lib/Grid/GridContainer';
import GridItem from 'components/lib/Grid/GridItem';
// sections for this page
import SectionPricing from 'pages-sections/pricing-page/SectionPricing';
import SectionFeatures from 'pages-sections/pricing-page/SectionFeatures';

import pricingStyle from 'styles/jss/nextjs-material-kit-pro/pages/pricingStyle';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(pricingStyle);

const BecomeAmbassador: React.FC = () => {
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

      <Parallax image="/img/bg2.jpg" filter="dark" small>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              md={8}
              sm={8}
              className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}>
              <h1 className={classes.title}>Let{"'"}s get started</h1>
              <h4>
                To get started, you will need to choose a plan for your needs. You can opt in for
                the monthly of annual options and go with one fo the three listed below.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionPricing />
          <hr />
          <SectionFeatures />
        </div>
      </div>
    </div>
  );
};
export default BecomeAmbassador;
