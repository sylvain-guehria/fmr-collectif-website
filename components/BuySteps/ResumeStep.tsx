import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from 'components/lib/Grid/GridContainer';
import GridItem from 'components/lib/Grid/GridItem';
import Card from 'components/lib/Card/Card';
import CardBody from 'components/lib/Card/CardBody';
import CardHeader from 'components/lib/Card/CardHeader';
import Muted from 'components/lib/Typography/Muted';
import Image from 'next/image';
import Button from './../lib/CustomButtons/Button';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import profilePageStyle from 'styles/jss/nextjs-material-kit-pro/pages/profilePageStyle';
import ShoppingCartTable from 'components/ShoppingCart/ShoppingCartTable';
import { BuyStepsViewModel } from './mvp/type';
import { SHIPPING_PRICE } from './LivraisonStep';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(profilePageStyle);

type Props = {
  goNextTab: () => void;
  viewModel: BuyStepsViewModel;
};

const ResumeStep: React.FC<Props> = ({ viewModel, goNextTab }) => {
  const { billingDetails, shippingDetailsDisplayed } = viewModel;

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
                    <h6>{billingDetails.name}</h6>
                  </Muted>
                  <p className={classes.description}>
                    {billingDetails.address.line1} <br />
                    {billingDetails.phone}
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
                    <h6>{shippingDetailsDisplayed.line1}</h6>
                    <h6>{viewModel.livraisonChecked && <> {SHIPPING_PRICE} € </>}</h6>
                  </Muted>
                  <p className={classes.description}>
                    <p className={classes.description}>{shippingDetailsDisplayed.line2}</p>
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
