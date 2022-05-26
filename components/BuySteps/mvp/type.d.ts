import { Boutiques } from 'hooks/useBoutique';
import UserEntity from 'modules/user/UserEntity';

export type BuyStepsViewModel = {
  user: UserEntity;
  remiseEnMainPropreChecked: boolean;
  livraisonChecked: boolean;
  identicalShippingAddressChecked: boolean;
  goNextTab: number;
  totalPrice: number;
  boutiques: Boutiques;
  paymentStatus: string;
  paymentErrorMessage: string;
  isSucceededPayementModalOpen: boolean;
  shippingDetailsDisplayed: {
    line1: string;
    line2: string;
  };
  billingDetails: BillingDetails;
  shippingDetails: ShippingDetails;
};

export type ShippingDetails = {
  name: string;
  phone: string;
  address: {
    line1: string;
  };
};
export type BillingDetails = {
  name: string;
  email: string;
  phone: string;
  address: {
    line1: string;
  };
};
