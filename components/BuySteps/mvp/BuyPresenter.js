/* eslint-disable camelcase */
import Presenter from '../../../sharedKernel/mvp/Presenter';
import { SHIPPING_PRICE } from '../LivraisonStep';

export default class BuyPresenter extends Presenter {

  constructor({ buyNumberOfItems, buyNumberOfTickets, fetchPostJSON }) {
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
    this.buyNumberOfItems = buyNumberOfItems;
    this.buyNumberOfTickets = buyNumberOfTickets;
    this.fetchPostJSON = fetchPostJSON;
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

  setEmptyBoutiques(emptyBoutiques) {
    this._emptyBoutiques = emptyBoutiques;
  }

  setAddModificationPrice(addModificationPrice) {
    this._addModificationPrice = addModificationPrice;
  }

  /**
   * @param {string} errorMessage
   *
   */
  setPaymentErrorMessage(errorMessage) {
    this.update({ paymentErrorMessage: errorMessage });
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

  makeCleanListOfWhatUserBought() {
    const boughtItems = this.viewModel().boutiques.items;
    const quantityBoughtItems = this.viewModel().boutiques.itemsQuantityBought;
    let items;
    boughtItems.forEach(item => (
      items = { ...items, [item.getId()]: `${item.getLabel()}, quantity : ${quantityBoughtItems[item.getId()]}` })
    );

    const boughtTickets = this.viewModel().boutiques.tickets;
    const quantityBoughtTickets = this.viewModel().boutiques.ticketsQuantityBought;
    let tickets;
    boughtTickets.forEach(ticket => (
      tickets = { ...tickets, [ticket.getId()]: `${ticket.getLabel()}, quantity : ${quantityBoughtTickets[ticket.getId()]}` })
    );

    return { ...items, ...tickets };
  }

  addShippingToPrice(){
    this._addModificationPrice('shipping', SHIPPING_PRICE);
  }

  removeShippingToPrice(){
    this._addModificationPrice('shipping', 0);
  }

  hasEnoughItemQuantityInStock() {
    const boughtItems = this.viewModel().boutiques.items;
    const quantityBoughtItems = this.viewModel().boutiques.itemsQuantityBought;
    for (const item of boughtItems) {
      if (!item.hasEnoughQuantityInStock(quantityBoughtItems[item.getId()])) return false;
    }
    return true;
  }

  hasEnoughTicketQuantityInStock() {
    const boughtTickets = this.viewModel().boutiques.tickets;
    const quantityBoughtTickets = this.viewModel().boutiques.ticketsQuantityBought;
    for (const ticket of boughtTickets) {
      if (!ticket.hasEnoughQuantityInStock(quantityBoughtTickets[ticket.getId()])) return false;
    }
    return true;
  }

  payementSucceeded() {
    this._openSucceededPayementModal();
    this.setPaymentStatus('succeeded');

    this.updateItemEntitiesAndSaveThem();
    this.updateTicketEntitiesAndSaveThem();

    this.addInHistory();
  }

  updateItemEntitiesAndSaveThem() {
    const boughtItems = this.viewModel().boutiques.items;
    const quantityBoughtItems = this.viewModel().boutiques.itemsQuantityBought;
    boughtItems.map(item => this.buyNumberOfItems(item, quantityBoughtItems[item.getId()]));
  }

  updateTicketEntitiesAndSaveThem() {
    const boughtTickets = this.viewModel().boutiques.tickets;
    const quantityBoughtTickets = this.viewModel().boutiques.ticketsQuantityBought;
    boughtTickets.map(ticket => this.buyNumberOfTickets(ticket, quantityBoughtTickets[ticket.getId()]));
  }

  addInHistory() {
    //TODO save what user bought in history
  }

  _openSucceededPayementModal() {
    this.update({
      isSucceededPayementModalOpen: true
    });
  }

  closeSucceededPayementModal() {
    this.update({
      isSucceededPayementModalOpen: false
    });
    this._emptyBoutiques();
  }

  onClosePayementModal() {
    this._emptyBoutiques();
  }

  async startStripePayement(stripe, elements, CardElement) {

    if (!elements) throw Error('Erreur inconnue, veuillez réessayer plus tard');
    if (!stripe) throw Error('Erreur inconnue, veuillez réessayer plus tard');

    this.setPaymentStatus('processing');
    if (!this.hasEnoughItemQuantityInStock() || !this.hasEnoughTicketQuantityInStock()) {
      this.setPaymentStatus('notEnoughQuantityInStock');
      return;
    }

    const response = await this.fetchPostJSON('/api/payment/payment_intents', {
      amount: this.viewModel().totalPrice,
      metadata: this.makeCleanListOfWhatUserBought()
    });

    if (response.statusCode === 500) {
      this.setPaymentStatus('error');
      this.setPaymentErrorMessage(response.message || 'Erreur inconnue, veuillez réessayer plus tard');
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) throw Error('Erreur inconnue, veuillez réessayer plus tard');

    const { error, paymentIntent } = await stripe.confirmCardPayment(response.client_secret, {
      payment_method: {
        card: cardElement,
        billing_details: this.viewModel().billingDetails
      },
      shipping: this.viewModel().shippingDetails,
      receipt_email: this.viewModel().userEmail
    });

    if (error) {
      this.setPaymentStatus('error');
      this.setPaymentErrorMessage(
        error.message || 'Erreur inconnue, veuillez réessayer plus tard'
      );
    } else if (paymentIntent) {
      this.payementSucceeded();
    }
  }
}
