import { validationSchema } from './BuyFormValidation';

const validFormData = {
  remiseEnMainPropreChecked: true,
  livraisonChecked: false,
  identicalShippingAddressChecked: false,
  billingFullName: 'billing full name',
  billingAddress: 'billing address',
  billingPhone: '0612345678',
  shippingFullName: '',
  shippingAddress: '',
  shippingPhone: ''
};

const getFirstErrorsOfSchema = schema => async formData => {
  try {
    await schema.validate(formData);
  } catch (e) {
    return e.message;
  }
};

const getFirstError = getFirstErrorsOfSchema(validationSchema);

it('should valid the form', async () => {
  validationSchema.validate(validFormData);
});

it('remiseEnMainPropreChecked is a bool and not null', async () => {
  const error = await getFirstError({
    ...validFormData,
    remiseEnMainPropreChecked: null
  });
  expect(error).toContain('remiseEnMainPropreChecked must be a `boolean` type');
});
