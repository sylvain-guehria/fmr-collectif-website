import Presenter from '../../../sharedKernel/mvp/Presenter';

export default class BuyPresenter extends Presenter {

  constructor() {
    super({
      viewModel: {
        remiseEnMainPropreChecked: false,
        livraisonChecked: false,
        identicalShippingAddressChecked: false,
        goNextTab: -1,
        userEmail: '',
        totalPrice: 0,
        paymentStatus: 'initial',
        paymentErrorMessage: '',
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
      },
      onDependencyChange: changes => {
        if (changes.boutiques) {
          this.update({ boutiques: this.dependency('boutiques') });
        }
        if (changes.userEmail) {
          this.update({ userEmail: this.dependency('userEmail') });
        }
        if (changes.totalPrice) {
          this.update({ totalPrice: this.dependency('totalPrice') });
        }
      }
    });
  }

  goNextTab() {
    this.update({ goNextTab: this.viewModel().goNextTab > -1 ? this.viewModel().goNextTab + 1 : 1 });
  }

  /**
   * @param {string} status
   *
   */
  setPaymentStatus(status) {
    this.update({ paymentStatus: status });
  }


  /**
   * @param {string} errorMessage
   *
   */
  setPaymentErrorMessage(errorMessage) {
    this.update({ setPaymentErrorMessage: errorMessage });
  }

  /**
   * @param {import('../BuySteps').BuyFormType} data
   *
   */
  setShippingData(data) {

    const { remiseEnMainPropreChecked, identicalShippingAddressChecked } = data;

    let shippingDetails = {
      name: '',
      phone: '',
      address: {
        line1: ''
      }
    };

    const billingDetails = {
      name: data.billingFullName,
      email: this.viewModel().userEmail,
      phone: data.billingPhone,
      address: {
        line1: data.billingAddress
      }
    };

    if (!remiseEnMainPropreChecked && !identicalShippingAddressChecked) {
      shippingDetails = {
        name: data.shippingFullName,
        phone: data.shippingPhone,
        address: {
          line1: data.shippingAddress
        }
      };
    }

    if (!remiseEnMainPropreChecked && identicalShippingAddressChecked) {
      shippingDetails = {
        name: data.billingFullName,
        phone: data.billingPhone,
        address: {
          line1: data.billingAddress
        }
      };
    }


    this.update({
      shippingDetailsDisplayed: {
        line1: remiseEnMainPropreChecked ? 'Remise en main propre au prochain évènement Frm' : identicalShippingAddressChecked
          ? 'Identique à l\'adresse de facturation' : shippingDetails.name,
        line2: remiseEnMainPropreChecked ? '' : identicalShippingAddressChecked
          ? '' : `${shippingDetails.address.line1} ${shippingDetails.phone}`
      }
    });

    this.update({
      remiseEnMainPropreChecked: data.remiseEnMainPropreChecked ?? false,
      livraisonChecked: data.livraisonChecked ?? false,
      identicalShippingAddressChecked: data.identicalShippingAddressChecked ?? false,
      billingDetails: billingDetails,
      shippingDetails: shippingDetails
    });
  }
}
