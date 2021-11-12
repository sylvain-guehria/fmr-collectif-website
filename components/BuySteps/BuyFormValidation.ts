import * as Yup from 'yup';

export const validationSchema = Yup.object()
  .shape({
    remiseEnMainProporeChecked: Yup.bool(),
    livraisonChecked: Yup.bool(),
    identicalShippingAddressChecked: Yup.bool(),
    billingFullName: Yup.string().required(
      'Veuillez entrer le nom et prénom qui apparaitront sur la facture'
    ),
    billingAddress: Yup.string().required('Veuillez entrer votre adresse de facturation'),
    billingPhone: Yup.string().required('Veuillez entrer le numéro de téléphone de facturation'),
    shippingFullName: Yup.string().when(
      ['identicalShippingAddressChecked', 'remiseEnMainProporeChecked'],
      {
        is: false,
        then: Yup.string().required('Veuillez entrer votre nom et prénom'),
      }
    ),
    shippingAddress: Yup.string().when(
      ['identicalShippingAddressChecked', 'remiseEnMainProporeChecked'],
      {
        is: false,
        then: Yup.string().required('Veuillez entrer votre adresse de livraison'),
      }
    ),
    shippingPhone: Yup.string().when(
      ['identicalShippingAddressChecked', 'remiseEnMainProporeChecked'],
      {
        is: false,
        then: Yup.string().required('Veuillez entrer votre numéro de téléphone'),
      }
    ),
  })
  .test('shouldSelectLivraisonOrRemiseEnMainPropre', '', obj => {
    if (obj.remiseEnMainProporeChecked || obj.livraisonChecked) {
      return true;
    }
    return new Yup.ValidationError(
      'Veuillez choisir le mode de livraison',
      null,
      'shouldSelectLivraisonOrRemiseEnMainPropre'
    );
  });
