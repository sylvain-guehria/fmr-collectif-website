import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('Veuillez entrer votre prénom'),
  lastName: Yup.string().required('Veuillez entrer votre nom'),
  email: Yup.string().required('Veuillez entrer votre email').email('Email invalide'),
  password: Yup.string()
    .min(6, 'Votre mot de passe doit faire au moins 6 caractères')
    .required('Le mot de passe est requis'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Les mots de passe doivent être identiques')
    .required('Confirmer votre mot de passe'),
  acceptTerms: Yup.bool().oneOf([true], 'Veuillez accepter les termes'),
});
