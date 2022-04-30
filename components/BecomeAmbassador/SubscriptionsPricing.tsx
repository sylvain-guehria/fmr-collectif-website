import React from 'react';
import classNames from 'classnames';

import GridContainer from 'components/lib/Grid/GridContainer';
import GridItem from 'components/lib/Grid/GridItem';
import Card from 'components/lib/Card/Card';
import CardBody from 'components/lib/Card/CardBody';
import Button from 'components/lib/CustomButtons/Button';
import { makeStyles } from '@material-ui/core/styles';

import pricingStyle from 'styles/jss/nextjs-material-kit-pro/pages/pricingSections/pricingStyle';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(pricingStyle);

const SubscriptionsPricing: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classNames(classes.pricingSection, classes.textCenter)}>
      <GridContainer>
        <GridItem md={4} sm={4}>
          <Card plain pricing>
            <CardBody pricing>
              <h6 className={classes.textInfo}>Free</h6>
              <h1 className={classes.cardTitle}>
                <small>€</small>0 <small>/an</small>
              </h1>
              <ul>
                <li>Accès aux évènements (entrée payante)</li>
              </ul>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem md={4} sm={4}>
          <Card raised pricing color="primary">
            <CardBody pricing>
              <h6>Premium</h6>
              <h1 className={classes.cardTitleWhite}>
                <small>€</small>50 <small>/an</small>
              </h1>
              <ul>
                <li>Tarif préférentiel sur les boissons</li>
                <li>Réduction sur le prix des entrées</li>
                <li>Soirées réservées</li>
                <li>Réduction sur les tshirts</li>
              </ul>
              <Button color="white" round>
                S&apos;abonner
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default SubscriptionsPricing;
