import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  remiseEnMainPropreChecked: Yup.bool().required(),
  livraisonChecked: Yup.bool().required(),
  identicalShippingAddressChecked: Yup.bool().required(),
  billingFullName: Yup.string().required(
    'Veuillez entrer le nom et prénom qui apparaitront sur la facture'
  ),
  billingAddress: Yup.string().required('Veuillez entrer votre adresse de facturation'),
  billingPhone: Yup.string().required('Veuillez entrer le numéro de téléphone de facturation'),
  shippingFullName: Yup.string(),
  shippingAddress: Yup.string(),
  shippingPhone: Yup.string(),
});
// .test('shouldSelectLivraisonOrRemiseEnMainPropre', '', obj => {
//   if (obj.remiseEnMainPropreChecked || obj.livraisonChecked) {
//     return true;
//   }
//   return new Yup.ValidationError(
//     'Veuillez choisir le mode de livraison',
//     null,
//     'shouldSelectLivraisonOrRemiseEnMainPropre'
//   );
// })
// .test('shippingAddress', '', obj => {
//   return !obj.remiseEnMainPropreChecked &&
//     !obj.identicalShippingAddressChecked &&
//     !obj.shippingFullName
//     ? new Yup.ValidationError(
//         'Veuillez entrer votre adresse de livraison',
//         null,
//         'shippingAddress'
//       )
//     : true;
// })
// .test('shippingPhone', '', obj => {
//   return !obj.remiseEnMainPropreChecked &&
//     !obj.identicalShippingAddressChecked &&
//     !obj.shippingFullName
//     ? new Yup.ValidationError('Veuillez entrer votre numéro de téléphone', null, 'shippingPhone')
//     : true;
// })
// .test('shippingFullName', '', obj => {
//   return !obj.remiseEnMainPropreChecked &&
//     !obj.identicalShippingAddressChecked &&
//     !obj.shippingFullName
//     ? new Yup.ValidationError('Veuillez entrer votre nom et prénom', null, 'shippingFullName')
//     : true;
// });
