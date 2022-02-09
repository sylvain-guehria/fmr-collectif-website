import React from 'react';
import GridContainer from 'components/lib/Grid/GridContainer.js';
import StripePaymentForm from './StripePaymentForm';
import { BuyStepsViewModel } from './mvp/type';
import BuyPresenter from './mvp/BuyPresenter';

type Props = {
  viewModel: BuyStepsViewModel;
  presenter: BuyPresenter;
};

const PaiementStep: React.FC<Props> = ({ viewModel, presenter }) => {
  return (
    <GridContainer justify="center">
      <StripePaymentForm
        totalPrice={viewModel.totalPrice}
        paymentErrorMessage={viewModel.paymentErrorMessage}
        paymentStatus={viewModel.paymentStatus}
        presenter={presenter}
      />
    </GridContainer>
  );
};
export default PaiementStep;
