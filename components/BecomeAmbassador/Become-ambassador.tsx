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
import SubscriptionsPricing from './SubscriptionsPricing';
import OurSubscriptions from './OurSubscriptions';

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
              <h1 className={classes.title}>Le concept te plait ? Rejoins nous !</h1>
              <h4>
                Découvre notre abonnement gratuit ainsi que notre abonnement privilège ci dessous
              </h4>
              <h5 style={{ color: 'white' }}>
                * Clic sur &quot;s&apos;abonner&quot;, paye ton abonnement et reçois ta carte
                membre. Elle te donnera accès à des tas d&apos;avantages.
              </h5>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SubscriptionsPricing />
          <hr />
          <OurSubscriptions />
        </div>
      </div>
    </div>
  );
};
export default BecomeAmbassador;
