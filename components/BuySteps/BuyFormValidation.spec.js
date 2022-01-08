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

describe('#remiseEnMainPropreChecked ', () => {
  it('is a bool and not null', async () => {
    const error = await getFirstError({
      ...validFormData,
      livraisonChecked: true,
      identicalShippingAddressChecked: true,
      remiseEnMainPropreChecked: null
    });
    expect(error).toContain('remiseEnMainPropreChecked must be a `boolean` type');
  });
  it('is required', async () => {
    const error = await getFirstError({
      ...validFormData,
      livraisonChecked: true,
      identicalShippingAddressChecked: true,
      remiseEnMainPropreChecked: undefined
    });
    expect(error).toContain('remiseEnMainPropreChecked is a required field');
  });
});

describe('#livraisonChecked ', () => {
  it('is a bool and not null', async () => {
    const error = await getFirstError({
      ...validFormData,
      livraisonChecked: null
    });
    expect(error).toContain('livraisonChecked must be a `boolean` type');
  });
  it('is required', async () => {
    const error = await getFirstError({
      ...validFormData,
      livraisonChecked: undefined
    });
    expect(error).toContain('livraisonChecked is a required field');
  });
});

describe('#identicalShippingAddressChecked ', () => {
  it('is a bool and not null', async () => {
    const error = await getFirstError({
      ...validFormData,
      identicalShippingAddressChecked: null
    });
    expect(error).toContain('identicalShippingAddressChecked must be a `boolean` type');
  });
});

describe('#billingFullName', () => {
  it('is a string', async () => {
    const error = await getFirstError({
      ...validFormData,
      billingFullName: {}
    });
    expect(error).toContain('billingFullName must be a `string` type');
  });
  it('is not null', async () => {
    const error = await getFirstError({
      ...validFormData,
      billingFullName: null
    });
    expect(error).toContain('billingFullName must be a `string` type');
  });
  it('is not undefined', async () => {
    const error = await getFirstError({
      ...validFormData,
      billingFullName: undefined
    });
    expect(error).toContain('Veuillez entrer le nom et prénom qui apparaitront sur la facture');
  });
  it('is required', async () => {
    const error = await getFirstError({
      ...validFormData,
      billingFullName: ''
    });
    expect(error).toContain('Veuillez entrer le nom et prénom qui apparaitront sur la facture');
  });
});

describe('#billingAddress', () => {
  it('is a string', async () => {
    const error = await getFirstError({
      ...validFormData,
      billingAddress: {}
    });
    expect(error).toContain('billingAddress must be a `string` type');
  });
  it('is not null', async () => {
    const error = await getFirstError({
      ...validFormData,
      billingAddress: null
    });
    expect(error).toContain('billingAddress must be a `string` type');
  });
  it('is not undefined', async () => {
    const error = await getFirstError({
      ...validFormData,
      billingAddress: undefined
    });
    expect(error).toContain('Veuillez entrer votre adresse de facturation');
  });
  it('is required', async () => {
    const error = await getFirstError({
      ...validFormData,
      billingAddress: ''
    });
    expect(error).toContain('Veuillez entrer votre adresse de facturation');
  });
});

describe('#billingPhone', () => {
  it('is a string', async () => {
    const error = await getFirstError({
      ...validFormData,
      billingPhone: {}
    });
    expect(error).toContain('billingPhone must be a `string` type');
  });
  it('is not null', async () => {
    const error = await getFirstError({
      ...validFormData,
      billingPhone: null
    });
    expect(error).toContain('billingPhone must be a `string` type');
  });
  it('is not undefined', async () => {
    const error = await getFirstError({
      ...validFormData,
      billingPhone: undefined
    });
    expect(error).toContain('Veuillez entrer le numéro de téléphone de facturation');
  });
  it('is required', async () => {
    const error = await getFirstError({
      ...validFormData,
      billingPhone: ''
    });
    expect(error).toContain('Veuillez entrer le numéro de téléphone de facturation');
  });
});

describe('#shippingFullName', () => {
  it('is a string', async () => {
    let error = await getFirstError({
      ...validFormData,
      shippingFullName: {}
    });
    expect(error).toContain('shippingFullName must be a `string` type');

    error = await getFirstError({
      ...validFormData,
      shippingFullName: null
    });
    expect(error).toContain('shippingFullName must be a `string` type');
  });
  it('is not required', async () => {
    validationSchema.validate({
      ...validFormData,
      shippingFullName: ''
    });
    validationSchema.validate({
      ...validFormData,
      shippingFullName: undefined
    });
  });
});

describe('#shippingAddress', () => {
  it('is a string', async () => {
    let error = await getFirstError({
      ...validFormData,
      shippingAddress: {}
    });
    expect(error).toContain('shippingAddress must be a `string` type');

    error = await getFirstError({
      ...validFormData,
      shippingAddress: null
    });
    expect(error).toContain('shippingAddress must be a `string` type');
  });
  it('is not required', async () => {
    validationSchema.validate({
      ...validFormData,
      shippingAddress: ''
    });
    validationSchema.validate({
      ...validFormData,
      shippingAddress: undefined
    });
  });
});

describe('#shippingPhone', () => {
  it('is a string', async () => {
    let error = await getFirstError({
      ...validFormData,
      shippingPhone: {}
    });
    expect(error).toContain('shippingPhone must be a `string` type');

    error = await getFirstError({
      ...validFormData,
      shippingPhone: null
    });
    expect(error).toContain('shippingPhone must be a `string` type');
  });
  it('is not required', async () => {
    validationSchema.validate({
      ...validFormData,
      shippingPhone: ''
    });
    validationSchema.validate({
      ...validFormData,
      shippingPhone: undefined
    });
  });
});

describe('#The shipping mode', () => {
  it('One must be selected', async () => {
    const error = await getFirstError({
      ...validFormData,
      remiseEnMainPropreChecked: false,
      livraisonChecked: false
    });
    expect(error).toContain('Veuillez choisir le mode de livraison');
  });
  it('Both cannot be selected at the same time', async () => {
    const error = await getFirstError({
      ...validFormData,
      remiseEnMainPropreChecked: true,
      livraisonChecked: true
    });
    expect(error).toContain('Veuillez choisir le mode de livraison');
  });
  validationSchema.validate({
    ...validFormData,
    remiseEnMainPropreChecked: true,
    livraisonChecked: false
  });
  validationSchema.validate({
    ...validFormData,
    remiseEnMainPropreChecked: false,
    livraisonChecked: true,
    identicalShippingAddressChecked: true
  });
});

describe('The user choose "Livraison"', () => {
  it('He must enter all shipping details or use the billing details', async () => {
    let error = await getFirstError({
      ...validFormData,
      remiseEnMainPropreChecked: false,
      livraisonChecked: true
    });
    expect(error).toContain('Veuillez entrer votre adresse de livraison');
    error = await getFirstError({
      ...validFormData,
      remiseEnMainPropreChecked: false,
      livraisonChecked: true,
      shippingAddress: 'shipping address'
    });
    expect(error).toContain('Veuillez entrer votre numéro de téléphone');
    error = await getFirstError({
      ...validFormData,
      remiseEnMainPropreChecked: false,
      livraisonChecked: true,
      shippingAddress: 'shipping address',
      shippingPhone: 'shipping phone'
    });
    expect(error).toContain('Veuillez entrer votre nom et prénom');

    validationSchema.validate({
      ...validFormData,
      remiseEnMainPropreChecked: false,
      livraisonChecked: true,
      shippingAddress: 'shipping address',
      shippingPhone: 'shipping phone',
      shippingFullName: 'sylvain Guehria'
    });

    validationSchema.validate({
      ...validFormData,
      remiseEnMainPropreChecked: false,
      livraisonChecked: true,
      identicalShippingAddressChecked: true
    });
  });
});
