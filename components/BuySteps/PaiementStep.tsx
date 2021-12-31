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

  const { remiseEnMainPropreChecked, identicalShippingAddressChecked } = viewModel;

  let shippingDetails = {
    name: '',
    phone: '',
    address: {
      line1: '',
    },
  };

  const billingDetails = {
    name: viewModel.billingFullName,
    email: user.getEmail(),
    phone: viewModel.billingPhone,
    address: {
      line1: viewModel.billingAddress,
    },
  };

  if (!remiseEnMainPropreChecked && !identicalShippingAddressChecked) {
    shippingDetails = {
      name: viewModel.shippingFullName,
      phone: viewModel.shippingPhone,
      address: {
        line1: viewModel.shippingAddress,
      },
    };
  }

  if (!remiseEnMainPropreChecked && identicalShippingAddressChecked) {
    shippingDetails = {
      name: viewModel.billingFullName,
      phone: viewModel.billingPhone,
      address: {
        line1: viewModel.billingAddress,
      },
    };
  }

  return (
    <GridContainer justify="center">
      <StripePaymentForm
        totalPrice={getTotalPrice()}
        userEmail={user.getEmail()}
        shippingDetails={shippingDetails}
        billingDetails={billingDetails}
      />
    </GridContainer>
  );
};
export default PaiementStep;
