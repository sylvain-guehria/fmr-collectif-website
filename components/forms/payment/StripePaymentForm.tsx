import React, { useState } from 'react';

import { fetchPostJSON } from '../../../stripe/api-helpers';
import { formatAmountForDisplay } from '../../../stripe/stripe-helpers';
import Input from '@material-ui/core/Input';

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import GridContainer from 'components/lib/Grid/GridContainer';
import GridItem from 'components/lib/Grid/GridItem';
import Button from '../../lib/CustomButtons/Button';
import { InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from 'styles/jss/nextjs-material-kit-pro/components/customInputStyle.js';

const CARD_OPTIONS = {
  iconStyle: 'solid' as const,
  style: {
    base: {
      iconColor: '#6772e5',
      color: '#6772e5',
      fontWeight: '500',
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': {
        color: '#fce883',
      },
      '::placeholder': {
        color: '#6772e5',
      },
    },
    invalid: {
      iconColor: '#ef2961',
      color: '#ef2961',
    },
  },
};

type PaymentStatusProps = {
  status: string;
  errorMessage: string;
};

const PaymentStatus: React.FC<PaymentStatusProps> = ({ status, errorMessage }) => {
  switch (status) {
    case 'processing':
    case 'requires_payment_method':
    case 'requires_confirmation':
      return <h2>Processing...</h2>;

    case 'requires_action':
      return <h2>Authenticating...</h2>;

    case 'succeeded':
      return <h2>Payment Succeeded 🥳</h2>;

    case 'error':
      return (
        <>
          <h2>Error 😭</h2>
          <p className="error-message">{errorMessage}</p>
        </>
      );

    default:
      return null;
  }
};

const StripePaymentForm: React.FC = () => {
  const [input, setInput] = useState({
    customDonation: Math.round(500 / 1),
    cardholderName: '',
  });
  const [payment, setPayment] = useState({ status: 'initial' });
  const [errorMessage, setErrorMessage] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = e =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  const handleClick: React.FormEventHandler<HTMLFormElement> = async () => {
    setPayment({ status: 'processing' });
    // Create a PaymentIntent with the specified amount.
    const response = await fetchPostJSON('/api/payment/payment_intents', {
      amount: 250,
    });

    setPayment(response);

    if (response.statusCode === 500) {
      setPayment({ status: 'error' });
      setErrorMessage(response.message);
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements!.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentIntent } = await stripe!.confirmCardPayment(response.client_secret, {
      payment_method: {
        card: cardElement!,
        billing_details: { name: input.cardholderName },
      },
    });

    if (error) {
      setPayment({ status: 'error' });
      setErrorMessage(error.message ?? 'An unknown error occured');
    } else if (paymentIntent) {
      setPayment(paymentIntent);
    }
  };

  return (
    <>
      <GridContainer justify="center">
        <GridItem>
          <fieldset>
            <legend className={classes.legend}>Your payment details:</legend>
            <Input
              placeholder="Cardholder name"
              type="Text"
              name="cardholderName"
              onChange={handleInputChange}
              required
            />
            <div>
              <br />
              <CardElement
                options={CARD_OPTIONS}
                onChange={e => {
                  if (e.error) {
                    setPayment({ status: 'error' });
                    setErrorMessage(e.error.message ?? 'An unknown error occured');
                  }
                }}
              />
            </div>
          </fieldset>
          {errorMessage ? (
            <InputLabel className={classes.labelRootError}>{errorMessage}</InputLabel>
          ) : null}
        </GridItem>
        <GridItem>
          <Button
            color="info"
            fullWidth={true}
            onClick={() => handleClick()}
            className={classes.payementButton}
            disabled={!['initial', 'succeeded', 'error'].includes(payment.status) || !stripe}>
            Payer {formatAmountForDisplay(input.customDonation, 'eur')}
          </Button>
        </GridItem>
      </GridContainer>
    </>
  );
};

export default StripePaymentForm;
