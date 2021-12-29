import React from 'react';
import GridContainer from 'components/lib/Grid/GridContainer.js';
import { useAuth } from '../../hooks/useAuth';
import StripePaymentForm from '../forms/payment/StripePaymentForm';
import { useBoutique } from '../../hooks/useBoutique';

import { BuyFormType } from './BuySteps';

type Props = {
  shippingData: BuyFormType;
};

const PaiementStep: React.FC<Props> = ({ shippingData }) => {
  const { getTotalPrice } = useBoutique();
  const { user } = useAuth();

  const { remiseEnMainPropreChecked, identicalShippingAddressChecked } = shippingData;

  let shippingDetails = {
    name: '',
    phone: '',
    address: {
      line1: '',
    },
  };

  const billingDetails = {
    name: shippingData.billingFullName,
    email: user.getEmail(),
    phone: shippingData.billingPhone,
    address: {
      line1: shippingData.billingAddress,
    },
  };

  if (!remiseEnMainPropreChecked && !identicalShippingAddressChecked) {
    shippingDetails = {
      name: shippingData.shippingFullName || '',
      phone: shippingData.shippingPhone || '',
      address: {
        line1: shippingData.shippingAddress || '',
      },
    };
  }

  if (!remiseEnMainPropreChecked && identicalShippingAddressChecked) {
    shippingDetails = {
      name: shippingData.billingFullName,
      phone: shippingData.billingPhone,
      address: {
        line1: shippingData.billingAddress,
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
