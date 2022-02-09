import BuyPresenter from './BuyPresenter';

const defaultViewModel = {
  remiseEnMainPropreChecked: false,
  livraisonChecked: false,
  identicalShippingAddressChecked: false,
  goNextTab: -1,
  userEmail: '',
  totalPrice: 0,
  paymentStatus: 'initial',
  paymentErrorMessage: '',
  isSucceededPayementModalOpen: false,
  boutiques: {
    items: [],
    tickets: []
  },
  shippingDetailsDisplayed: {
    line1: '',
    line2: ''
  },
  billingDetails: {
    name: '',
    email: '',
    phone: '',
    address: {
      line1: ''
    }
  },
  shippingDetails: {
    name: '',
    phone: '',
    address: {
      line1: ''
    }
  }
};

let presenter;
const buyNumberOfItems = jest.fn();

beforeEach(() => {
  presenter = new BuyPresenter(buyNumberOfItems);
});


describe('#useDynamicDependencies', () => {
  it('update the userEmail', async () => {
    presenter.updateDependencies({ userEmail: 'sylvainguehria@gmail.com' });
    expect(presenter.viewModel().userEmail).toBe('sylvainguehria@gmail.com');
  });
  it('update the totalPrice', async () => {
    presenter.updateDependencies({ totalPrice: 123456789 });
    expect(presenter.viewModel().totalPrice).toBe(123456789);
  });
  it('update the boutiques', async () => {
    presenter.updateDependencies({
      boutiques: {
        items: ['item1', 'item2'],
        tickets: []
      }
    });
    expect(presenter.viewModel().boutiques).toStrictEqual({
      items: ['item1', 'item2'],
      tickets: []
    });
  });
});


describe('#setShippingData', () => {
  const billingDetails = {
    billingAddress: 'my billing adress',
    billingFullName: 'sylvain guehria',
    billingPhone: '+33664397053'
  };
  beforeEach(() => {
    presenter.updateDependencies({ userEmail: 'sylvainguehria@gmail.com' });
  });
  describe('the user checked the checkbox "remise en main propre"', () => {
    it('display "Remise en main propre au prochain évènement Frm" and fullfill the billing details', async () => {

      presenter.setShippingData({ ...billingDetails, remiseEnMainPropreChecked: true });

      expect(presenter.viewModel()).toStrictEqual(
        {
          ...defaultViewModel,
          userEmail: 'sylvainguehria@gmail.com',
          remiseEnMainPropreChecked: true,
          livraisonChecked: false,
          identicalShippingAddressChecked: false,
          shippingDetailsDisplayed: {
            line1: 'Remise en main propre au prochain évènement Frm',
            line2: ''
          },
          billingDetails: {
            name: 'sylvain guehria',
            email: 'sylvainguehria@gmail.com',
            phone: '+33664397053',
            address: {
              line1: 'my billing adress'
            }
          },
          shippingDetails: {
            name: '',
            phone: '',
            address: {
              line1: ''
            }
          }
        }
      );
    });
  });
  describe('the user checked the checkbox "shipping" and the checkbox "identical Shipping Address"', () => {
    it('display "Identique à l\'adresse de facturation" as shipping address and fullfill the billing & shipping details ', async () => {

      presenter.setShippingData({ ...billingDetails, livraisonChecked: true, identicalShippingAddressChecked: true });

      expect(presenter.viewModel()).toStrictEqual(
        {
          ...defaultViewModel,
          userEmail: 'sylvainguehria@gmail.com',
          remiseEnMainPropreChecked: false,
          livraisonChecked: true,
          identicalShippingAddressChecked: true,
          shippingDetailsDisplayed: {
            line1: 'Identique à l\'adresse de facturation',
            line2: ''
          },
          billingDetails: {
            name: 'sylvain guehria',
            email: 'sylvainguehria@gmail.com',
            phone: '+33664397053',
            address: {
              line1: 'my billing adress'
            }
          },
          shippingDetails: {
            name: 'sylvain guehria',
            phone: '+33664397053',
            address: {
              line1: 'my billing adress'
            }
          }
        }
      );
    });
  });
  describe('the user checked the checkbox "shipping" and gave a Shipping Address', () => {
    it('display the shipping address and fullfill the billing & shipping details ', async () => {

      const shippingDetails = {
        shippingAddress: 'my shipping adress',
        shippingFullName: 'sylvain guehria ship me',
        shippingPhone: '+33758741236'
      };

      presenter.setShippingData({ ...billingDetails, ...shippingDetails, livraisonChecked: true, identicalShippingAddressChecked: false });

      expect(presenter.viewModel()).toStrictEqual(
        {
          ...defaultViewModel,
          userEmail: 'sylvainguehria@gmail.com',
          remiseEnMainPropreChecked: false,
          livraisonChecked: true,
          identicalShippingAddressChecked: false,
          shippingDetailsDisplayed: {
            line1: 'sylvain guehria ship me',
            line2: 'my shipping adress +33758741236'
          },
          billingDetails: {
            name: 'sylvain guehria',
            email: 'sylvainguehria@gmail.com',
            phone: '+33664397053',
            address: {
              line1: 'my billing adress'
            }
          },
          shippingDetails: {
            name: 'sylvain guehria ship me',
            phone: '+33758741236',
            address: {
              line1: 'my shipping adress'
            }
          }
        }
      );
    });
  });
});

describe('The user make a payment', () => {
  describe('The payment failed', () => {
    presenter.updateDependencies({
      boutiques: {
        items: ['item1', 'item2'],
        tickets: []
      }
    });
    it('setPaymentStatus to notEnoughQuantityInStock if has not Enough Quantity In Stock', async () => {
    });
    it('setPaymentStatus to error', async () => {
    });
    it('setPaymentErrorMessage(response.message)', async () => {
    });
    it('Does not call payement succeed', async () => {
    });
  });
  describe('The payment succeed', () => {
    it('make a clean list for the metadat of stripe', async () => {
    });
    it('Open the payement suceeded modal', async () => {
    });
    it('setPaymentStatus to succeeded', async () => {
    });
    it('Save the purchase in order history', async () => {
    });
    it('buyNumberOfItems for each items', async () => {
    });
  });

});

