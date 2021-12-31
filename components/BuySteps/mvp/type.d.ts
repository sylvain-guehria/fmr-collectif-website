import { Boutiques } from 'hooks/useBoutique';

export type BuyStepsViewModel = {
  remiseEnMainPropreChecked: boolean;
  livraisonChecked: boolean;
  identicalShippingAddressChecked: boolean;
  userEmail: string;
  goNextTab: number;
  totalPrice: number;
  boutiques: Boutiques;
  paymentStatus: string;
  paymentErrorMessage: string;
  shippingDetailsDisplayed: {
    line1: string;
    line2: string;
  };
  billingDetails: {
    name: string;
    email: string;
    phone: string;
    address: {
      line1: string;
    };
  };
  shippingDetails: {
    name: string;
    phone: string;
    address: {
      line1: string;
    };
  };
};
