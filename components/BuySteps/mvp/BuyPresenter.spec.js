import BuyPresenter from './BuyPresenter';
import ItemEntity from '../../../modules/item/ItemEntity';

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
const fetchPostJSON = jest.fn();

const stripe = {
  confirmCardPayment: jest.fn()
};

const elements = {
  getElement: jest.fn()
};

beforeEach(() => {
  presenter = new BuyPresenter({ buyNumberOfItems, fetchPostJSON });
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
  presenter = new BuyPresenter({ buyNumberOfItems, fetchPostJSON });
  const item1 = new ItemEntity({ uid: 'uid1', quantity: 3, label: 'labelItem1' });
  const item2 = new ItemEntity({ uid: 'uid2', quantity: 1, label: 'labelItem2' });

  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('The payment failed', () => {
    it('Set paymentStatus to notEnoughQuantityInStock if has not Enough Quantity In Stock', async () => {
      await presenter.updateDependencies({
        boutiques: {
          items: [item1, item2],
          itemsQuantityBought: {
            uid1: 5,
            uid2: 0
          },
          tickets: []
        }
      });
      await presenter.startStripePayement({}, {}, {});
      expect(presenter.viewModel().paymentStatus).toBe('notEnoughQuantityInStock');
    });
    it('Set paymentStatus to error and gives an error message when the payement intent does not succeed', async () => {
      await presenter.updateDependencies({
        boutiques: {
          items: [item1, item2],
          itemsQuantityBought: {
            uid1: 1,
            uid2: 1
          },
          tickets: []
        }
      });
      fetchPostJSON.mockResolvedValue({ statusCode: 500, message: 'sorry code 500' });
      await presenter.startStripePayement({}, {}, {});
      expect(presenter.viewModel().paymentStatus).toBe('error');
      expect(presenter.viewModel().paymentErrorMessage).toBe('sorry code 500');
      expect(buyNumberOfItems).toHaveBeenCalledTimes(0);
    });
    it('Set paymentStatus to error and gives an error message when the confirm card payement does not succeed', async () => {
      await presenter.updateDependencies({
        boutiques: {
          items: [item1, item2],
          itemsQuantityBought: {
            uid1: 1,
            uid2: 1
          },
          tickets: []
        }
      });
      fetchPostJSON.mockResolvedValue({ statusCode: 200 });
      elements.getElement.mockResolvedValue({});
      stripe.confirmCardPayment.mockResolvedValue({ error: { message: 'confirmCardPayment error' }, paymentIntent: null });
      await presenter.startStripePayement(stripe, elements, {});
      expect(presenter.viewModel().paymentStatus).toBe('error');
      expect(presenter.viewModel().paymentErrorMessage).toBe('confirmCardPayment error');
      expect(buyNumberOfItems).toHaveBeenCalledTimes(0);
    });
  });
  describe('The payment succeed', () => {
    it('Make a clean list for the metadata of stripe', async () => {
      await presenter.updateDependencies({
        boutiques: {
          items: [item1, item2],
          itemsQuantityBought: {
            uid1: 2,
            uid2: 1
          },
          tickets: []
        }
      });
      fetchPostJSON.mockResolvedValue({ statusCode: 200 });
      elements.getElement.mockResolvedValue({});
      stripe.confirmCardPayment.mockResolvedValue({ error: null, paymentIntent: true });
      await presenter.startStripePayement(stripe, elements, {});
      expect(presenter.viewModel().paymentStatus).toBe('succeeded');
      expect(presenter.viewModel().paymentErrorMessage).toBe('');
      expect(buyNumberOfItems).toHaveBeenCalledTimes(2);
      expect(presenter.makeCleanListOfWhatUserBought()).toStrictEqual(
        {
          uid1: 'labelItem1, quantity : 2',
          uid2: 'labelItem2, quantity : 1'
        });
    });
    it('Open the payement suceeded modal and et paymentStatus to succeeded', async () => {
      await presenter.updateDependencies({
        boutiques: {
          items: [item1, item2],
          itemsQuantityBought: {
            uid1: 2,
            uid2: 1
          },
          tickets: []
        }
      });
      fetchPostJSON.mockResolvedValue({ statusCode: 200 });
      elements.getElement.mockResolvedValue({});
      stripe.confirmCardPayment.mockResolvedValue({ error: null, paymentIntent: true });
      await presenter.startStripePayement(stripe, elements, {});
      expect(presenter.viewModel().isSucceededPayementModalOpen).toBe(true);
      expect(presenter.viewModel().paymentStatus).toBe('succeeded');
    });
    it('Save the purchase in order history', async () => {
    });
    it('BuyNumberOfItems for each items', async () => {
      await presenter.updateDependencies({
        boutiques: {
          items: [item1, item2],
          itemsQuantityBought: {
            uid1: 2,
            uid2: 1
          },
          tickets: []
        }
      });
      fetchPostJSON.mockResolvedValue({ statusCode: 200 });
      elements.getElement.mockResolvedValue({});
      stripe.confirmCardPayment.mockResolvedValue({ error: null, paymentIntent: true });
      await presenter.startStripePayement(stripe, elements, {});
      expect(buyNumberOfItems).toHaveBeenCalledTimes(2);
      expect(buyNumberOfItems).toHaveBeenCalledWith(item1, 2);
      expect(buyNumberOfItems).toHaveBeenCalledWith(item2, 1);
    });
  });

});

