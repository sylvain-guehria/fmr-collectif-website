import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('Veuillez entrer votre prénom'),
  lastName: Yup.string().required('Veuillez entrer votre nom'),
  email: Yup.string().required('Veuillez entrer votre email').email('Email invalide'),
  message: Yup.string()
    .min(30, 'Votre message doit contenir au moins 30 caractères')
    .required('Vous devez écrire un message'),
  notARobot: Yup.bool().oneOf([true], 'Veuillez accepter les termes'),
});
