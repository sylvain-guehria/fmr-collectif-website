import React, { useState } from 'react';
import classNames from 'classnames';

import GridContainer from 'components/lib/Grid/GridContainer';
import GridItem from 'components/lib/Grid/GridItem';
import Card from 'components/lib/Card/Card';
import CardBody from 'components/lib/Card/CardBody';
import Button from 'components/lib/CustomButtons/Button';
import { makeStyles } from '@material-ui/core/styles';

import pricingStyle from 'styles/jss/nextjs-material-kit-pro/pages/pricingSections/pricingStyle';
import PayementDoneModal from './PayementDoneModal';
import { useRouter } from 'next/router';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(pricingStyle);

const SubscriptionsPricing: React.FC = () => {
  const classes = useStyles();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasPayementSucceeded, setHasPayementSucceeded] = useState(false);
  const router = useRouter();

  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      setIsModalOpen(true);
      setHasPayementSucceeded(true);
    }

    if (query.get('canceled')) {
      setIsModalOpen(true);
      setHasPayementSucceeded(false);
    }
  }, []);

  const closeModalAndRedirectHome = (): void => {
    setHasPayementSucceeded(false);
    router.push('/home');
  };

  const closeModal = (): void => {
    setHasPayementSucceeded(false);
  };

  return (
    <div className={classNames(classes.pricingSection, classes.textCenter)}>
      <GridContainer>
        <GridItem md={4} sm={4}>
          <Card plain pricing>
            <CardBody pricing>
              <h6 className={classes.textInfo}>Classic</h6>
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
              <h6>Privilège</h6>
              <h1 className={classes.cardTitleWhite}>
                <small>€</small>50 <small>/an</small>
              </h1>
              <ul>
                <li>Tarif préférentiel sur les boissons</li>
                <li>Réduction sur le prix des entrées</li>
                <li>Soirées réservées</li>
                <li>Réduction sur les tshirts</li>
              </ul>
              <form action="/api/products/checkout_sessions_abo_premium" method="POST">
                <Button color="white" type="submit" round>
                  S&apos;abonner
                </Button>
              </form>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <PayementDoneModal
        isOpen={isModalOpen}
        hasPayementSucceeded={hasPayementSucceeded}
        closeModalAndRedirectHome={() => closeModalAndRedirectHome()}
        closeModal={() => closeModal()}
        onClose={() => closeModal()}
      />
    </div>
  );
};

export default SubscriptionsPricing;
