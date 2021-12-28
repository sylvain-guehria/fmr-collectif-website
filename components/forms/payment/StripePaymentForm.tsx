/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
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
import { StripeCardElementChangeEvent } from '@stripe/stripe-js';
import PaymentStatus from './PaymentStatus';

const CARD_OPTIONS = {
  iconStyle: 'solid' as const,
  style: {
    base: {
      iconColor: '#00acc1',
      color: '#00acc1',
      fontWeight: '500',
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': {
        color: 'black',
      },
      '::placeholder': {
        color: '#00acc1',
      },
    },
    invalid: {
      iconColor: '#ef2961',
      color: '#ef2961',
    },
  },
};

type StripePaymentFormProps = {
  totalPrice: number;
  userEmail: string;
  userId: string;
  shippingDetails: {
    name: string;
    email: string;
    phone: string;
    address: {
      line1: string;
    };
  };
  billingDetails: {
    name: string;
    email: string;
    phone: string;
    address: {
      line1: string;
    };
  };
};

const StripePaymentForm: React.FC<StripePaymentFormProps> = ({
  totalPrice,
  userEmail,
  userId,
  shippingDetails,
  billingDetails,
}) => {
  const [cardholderName, setCardholderName] = useState('');
  const [payment, setPayment] = useState({ status: 'initial' });
  const [errorMessage, setErrorMessage] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const updateErrorDisplay = (e: StripeCardElementChangeEvent): void => {
    if (e.error) {
      setPayment({ status: 'error' });
      setErrorMessage(e.error.message ?? 'An unknown error occured');
    } else {
      setErrorMessage('');
    }
  };

  const handleClick = async (): Promise<void> => {
    setPayment({ status: 'processing' });

    const response = await fetchPostJSON('/api/payment/billing_details', {
      amount: totalPrice,
      userId: userId,
    });

    setPayment(response);

    if (response.statusCode === 500) {
      setPayment({ status: 'error' });
      setErrorMessage(response.message);
      return;
    }

    const cardElement = elements!.getElement(CardElement);

    const { error, paymentIntent } = await stripe!.confirmCardPayment(response.client_secret, {
      payment_method: {
        card: cardElement!,
        billing_details: billingDetails,
      },
      shipping: shippingDetails,
      return_url: '/home',
      receipt_email: userEmail,
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
          <fieldset style={{ borderRadius: '8px', padding: '16px' }}>
            <legend className={classes.legend}>Détails du paiement:</legend>
            <Input
              placeholder="Nom sur la carte"
              type="Text"
              name="cardholderName"
              onChange={e => setCardholderName(e.target.value)}
              required
            />
            <div>
              <br />
              <CardElement options={CARD_OPTIONS} onChange={e => updateErrorDisplay(e)} />
            </div>
            <br />
            {errorMessage && (
              <InputLabel className={classes.labelRootError}>{errorMessage}</InputLabel>
            )}
          </fieldset>
        </GridItem>
        <GridItem>
          <Button
            color="info"
            fullWidth={true}
            onClick={() => handleClick()}
            className={classes.payementButton}
            disabled={!['initial', 'succeeded', 'error'].includes(payment.status) || !stripe}>
            Payer {formatAmountForDisplay(totalPrice, 'eur')}
          </Button>
          <PaymentStatus status={payment.status} />
        </GridItem>
      </GridContainer>
    </>
  );
};

export default StripePaymentForm;
