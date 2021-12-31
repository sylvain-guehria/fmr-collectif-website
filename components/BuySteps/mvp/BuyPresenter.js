import Presenter from '../../../sharedKernel/mvp/Presenter';

export default class BuyPresenter extends Presenter {

  constructor() {
    super({
      viewModel: {
        remiseEnMainPropreChecked: false,
        livraisonChecked: false,
        identicalShippingAddressChecked: false,
        shouldSelectLivraisonOrRemiseEnMainPropre: false,
        billingFullName: '',
        billingAddress: '',
        billingPhone: '',
        shippingFullName: '',
        shippingAddress: '',
        shippingPhone: '',
        goNextTab: -1,
        boutiques: {}
      },
      onDependencyChange: changes => {
        if (changes.boutiques) {
          this._updateViewModel(this.dependency('boutiques'));
        }
      }
    });
  }

  _updateViewModel(boutiques) {
    this.update({ boutiques: boutiques });
  }


  goNextTab() {
    this.update({ goNextTab: this.viewModel().goNextTab + 1 });
  }
  setShippingData(data) {
    this.update({ ...data });
  }
}
