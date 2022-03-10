import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  label: Yup.string().required('Veuillez entrer un label'),
  place: Yup.string().required('Veuillez entrer un lieu'),
  date: Yup.number().required('Veuillez entrer une date'),
  quantity: Yup.number().required('Veuillez entrer une quantité'),
  price: Yup.number().required('Veuillez entrer un prix'),
  numberTotalSell: Yup.number().required('Veuillez entrer le nombre total de vente'),
});
