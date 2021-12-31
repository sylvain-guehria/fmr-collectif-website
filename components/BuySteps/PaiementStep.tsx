import React from 'react';
import GridContainer from 'components/lib/Grid/GridContainer.js';
import StripePaymentForm from './StripePaymentForm';
import { BuyStepsViewModel } from './mvp/type';

type Props = {
  viewModel: BuyStepsViewModel;
};

const PaiementStep: React.FC<Props> = ({ viewModel }) => {
  return (
    <GridContainer justify="center">
      <StripePaymentForm
        totalPrice={viewModel.totalPrice}
        userEmail={viewModel.userEmail}
        shippingDetails={viewModel.shippingDetails}
        billingDetails={viewModel.billingDetails}
      />
    </GridContainer>
  );
};
export default PaiementStep;
