import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from 'components/lib/Grid/GridContainer.js';
import GridItem from 'components/lib/Grid/GridItem.js';
import Card from 'components/lib/Card/Card.js';
import CardBody from 'components/lib/Card/CardBody.js';
import CardHeader from 'components/lib/Card/CardHeader.js';
import Muted from 'components/lib/Typography/Muted.js';
import { BuyFormType } from './BuySteps';
import Image from 'next/image';
import Button from './../lib/CustomButtons/Button';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import profilePageStyle from 'styles/jss/nextjs-material-kit-pro/pages/profilePageStyle.js';
import ShoppingCartTable from 'components/ShoppingCart/ShoppingCartTable';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(profilePageStyle);

type Props = {
  shippingData: BuyFormType;
  goNextTab: () => void;
};

const ResumeStep: React.FC<Props> = ({ shippingData, goNextTab }) => {
  const {
    remiseEnMainProporeChecked,
    identicalShippingAddressChecked,
    billingFullName,
    billingAddress,
    billingPhone,
    shippingFullName,
    shippingAddress,
    shippingPhone,
  } = shippingData;

  const classes = useStyles();
  return (
    <>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={5} className={classes.gridItem}>
          <Card profile plain className={classes.card}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={5}>
                <CardHeader image plain>
                  <Image
                    src="/img/facturation-noir.jpg"
                    alt="facturation"
                    width={500}
                    height={500}
                  />
                </CardHeader>
              </GridItem>
              <GridItem xs={12} sm={12} md={7}>
                <CardBody plain>
                  <h4 className={classes.cardTitle}>Adresse de facturation</h4>
                  <Muted>
                    <h6>{billingFullName}</h6>
                  </Muted>
                  <p className={classes.description}>
                    {billingAddress} <br />
                    {billingPhone}
                  </p>
                </CardBody>
              </GridItem>
            </GridContainer>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={5} className={classes.gridItem}>
          <Card profile plain className={classes.card}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={5}>
                <CardHeader image plain>
                  <Image src="/img/livraison.jpg" alt="Livraison" width={500} height={500} />
                </CardHeader>
              </GridItem>
              <GridItem xs={12} sm={12} md={7}>
                <CardBody plain>
                  <h4 className={classes.cardTitle}>Adresse de livraison</h4>
                  <Muted>
                    <h6>
                      {remiseEnMainProporeChecked
                        ? 'Remise en main propre au prochain évènement Frm'
                        : identicalShippingAddressChecked
                        ? `Identique à l'adresse de facturation`
                        : shippingFullName}
                    </h6>
                  </Muted>
                  <p className={classes.description}>
                    {remiseEnMainProporeChecked ? (
                      ''
                    ) : identicalShippingAddressChecked ? (
                      ''
                    ) : (
                      <p className={classes.description}>
                        {shippingAddress} <br />
                        {shippingPhone}
                      </p>
                    )}
                  </p>
                </CardBody>
              </GridItem>
            </GridContainer>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <ShoppingCartTable readOnly />
      </GridContainer>
      &nbsp;
      <Button
        onClick={goNextTab}
        color="info"
        round
        style={{ position: 'absolute', bottom: 15, right: 15 }}>
        <>
          Aller au paiement <KeyboardArrowRight />
        </>
      </Button>
    </>
  );
};
export default ResumeStep;
