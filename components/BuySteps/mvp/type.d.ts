import { Boutiques } from 'hooks/useBoutique';

export type BuyStepsViewModel = {
  remiseEnMainPropreChecked: boolean;
  livraisonChecked: boolean;
  identicalShippingAddressChecked: boolean;
  shouldSelectLivraisonOrRemiseEnMainPropre: boolean;
  billingFullName: string;
  billingAddress: string;
  billingPhone: string;
  shippingFullName: string;
  shippingAddress: string;
  shippingPhone: string;
  goNextTab: number;
  boutiques: Boutiques;
};
