import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  label: Yup.string().required('Veuillez entrer un label'),
  size: Yup.string().required('Veuillez entrer une taille'),
  photoLink: Yup.string(),
  color: Yup.string().required('Veuillez entrer une couleur'),
  quantity: Yup.number().required('Veuillez entrer une quantité'),
  price: Yup.number().required('Veuillez entrer un prix'),
  numberTotalSell: Yup.number().required('Veuillez entrer le nombre total de vente'),
});
