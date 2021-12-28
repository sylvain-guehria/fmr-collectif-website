import React from 'react';
import GridContainer from 'components/lib/Grid/GridContainer.js';
import { useAuth } from '../../hooks/useAuth';
import StripePaymentForm from '../forms/payment/StripePaymentForm';
import { useBoutique } from '../../hooks/useBoutique';

import { BuyFormType } from './BuySteps';

type Props = {
  shippingData: BuyFormType;
};

// {
//   remiseEnMainPropreChecked?: boolean;
//   livraisonChecked?: boolean;
//   identicalShippingAddressChecked?: boolean;
//   shouldSelectLivraisonOrRemiseEnMainPropre?: boolean;
//   billingFullName?: string;
//   billingAddress?: string;
//   billingPhone?: string;
//   shippingFullName?: string;
//   shippingAddress?: string;
//   shippingPhone?: string;
// }

const PaiementStep: React.FC<Props> = ({ shippingData }) => {
  const { getTotalPrice } = useBoutique();
  const { user } = useAuth();

  const { remiseEnMainPropreChecked, identicalShippingAddressChecked } = shippingData;

  let shippingDetails;

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
      name: shippingData.shippingFullName,
      email: user.getEmail(),
      phone: shippingData.shippingPhone,
      address: {
        line1: shippingData.shippingAddress,
      },
    };
  }

  if (!remiseEnMainPropreChecked && identicalShippingAddressChecked) {
    shippingDetails = billingDetails;
  }

  return (
    <GridContainer justify="center">
      <StripePaymentForm
        totalPrice={getTotalPrice()}
        userEmail={user.getEmail()}
        userId={user.getId()}
        shippingDetails={shippingDetails}
        billingDetails={billingDetails}
      />
    </GridContainer>
  );
};
export default PaiementStep;
