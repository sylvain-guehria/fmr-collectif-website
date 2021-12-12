import React from 'react';
// import classNames from 'classnames';
// import { makeStyles } from '@material-ui/core/styles';
import GridContainer from 'components/lib/Grid/GridContainer.js';
// import GridItem from 'components/lib/Grid/GridItem.js';
import StripePaymentForm from '../forms/payment/StripePaymentForm';
import { useBoutique } from '../../hooks/useBoutique';

import { BuyFormType } from './BuySteps';
// import profilePageStyle from e'styles/jss/nextjs-material-kit-pro/pages/profilePageStyle.js';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// const useStyles = makeStyles(profilePageStyle);

type Props = {
  shippingData: BuyFormType;
};

const PaiementStep: React.FC<Props> = ({ shippingData }) => {
  const { getTotalPrice } = useBoutique();

  return (
    <GridContainer justify="center">
      <StripePaymentForm totalPrice={getTotalPrice()} />
    </GridContainer>
  );
};
export default PaiementStep;
