import React from 'react';
import GridContainer from 'components/lib/Grid/GridContainer.js';
import { useAuth } from '../../hooks/useAuth';
import StripePaymentForm from './StripePaymentForm';
import { useBoutique } from '../../hooks/useBoutique';
import { BuyStepsViewModel } from './mvp/type';

type Props = {
  viewModel: BuyStepsViewModel;
};

const PaiementStep: React.FC<Props> = ({ viewModel }) => {
  const { getTotalPrice } = useBoutique();
  const { user } = useAuth();

  return (
    <GridContainer justify="center">
      <StripePaymentForm
        totalPrice={getTotalPrice()}
        userEmail={user.getEmail()}
        shippingDetails={viewModel.shippingDetails}
        billingDetails={viewModel.billingDetails}
      />
    </GridContainer>
  );
};
export default PaiementStep;
