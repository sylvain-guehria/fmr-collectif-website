import * as Yup from 'yup';
import { genderEnum } from '../../../modules/item/itemType';

export const validationSchema = Yup.object().shape({
  label: Yup.string().required('Veuillez entrer un label'),
  gender: Yup.string().oneOf(Object.values(genderEnum)).required('Veuillez entrer un sex'),
  size: Yup.string().required('Veuillez entrer une taille'),
  photoLink: Yup.string().required('Veuillez entrer une image'),
  color: Yup.string().required('Veuillez entrer une couleur'),
  quantity: Yup.number().required('Veuillez entrer une quantité'),
  price: Yup.number().required('Veuillez entrer un prix'),
  numberTotalSell: Yup.number().required('Veuillez entrer le nombre total de vente'),
});
