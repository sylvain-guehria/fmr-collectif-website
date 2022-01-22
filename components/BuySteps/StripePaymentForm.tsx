/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';

import { fetchPostJSON } from './../../stripe/api-helpers';
import { formatAmountForDisplay } from './../../stripe/stripe-helpers';
import Input from '@material-ui/core/Input';

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import GridContainer from 'components/lib/Grid/GridContainer';
import GridItem from 'components/lib/Grid/GridItem';
import Button from './../lib/CustomButtons/Button';
import { InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from 'styles/jss/nextjs-material-kit-pro/components/customInputStyle.js';
import { StripeCardElementChangeEvent } from '@stripe/stripe-js';
import PaymentStatus from './PaymentStatus';
import BuyPresenter from './mvp/BuyPresenter';
import { BillingDetails, ShippingDetails } from './mvp/type';

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
  presenter: BuyPresenter;
  totalPrice: number;
  userEmail: string;
  paymentStatus: string;
  paymentErrorMessage: string;
  shippingDetails: ShippingDetails;
  billingDetails: BillingDetails;
};

type PayementResType = {
  statusCode?: number;
  message?: string;
  status?: string;
  client_secret: string;
};

const StripePaymentForm: React.FC<StripePaymentFormProps> = ({
  totalPrice,
  userEmail,
  shippingDetails,
  billingDetails,
  paymentErrorMessage,
  paymentStatus,
  presenter,
}) => {
  // const [cardholderName, setCardholderName] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const updateErrorDisplay = (e: StripeCardElementChangeEvent): void => {
    if (e.error) {
      presenter.setPaymentStatus('error');
      presenter.setPaymentErrorMessage(e.error.message ?? 'An unknown error occured');
    } else {
      presenter.setPaymentErrorMessage('');
    }
  };

  const handleClick = async (): Promise<void> => {
    presenter.setPaymentStatus('processing');
    if (!presenter.hasEnoughQuantityInStock()) {
      presenter.setPaymentStatus('notEnoughQuantityInStock');
      return;
    }

    const response: PayementResType = await fetchPostJSON('/api/payment/payment_intents', {
      amount: totalPrice,
      metadata: presenter.makeCleanListOfWhatUserBought(),
    });

    if (response.statusCode === 500) {
      presenter.setPaymentStatus('error');
      presenter.setPaymentErrorMessage(response.message || '');
      return;
    }

    const cardElement = elements!.getElement(CardElement);

    const { error, paymentIntent } = await stripe!.confirmCardPayment(response.client_secret, {
      payment_method: {
        card: cardElement!,
        billing_details: billingDetails,
      },
      shipping: shippingDetails,
      receipt_email: userEmail,
    });

    if (error) {
      presenter.setPaymentStatus('error');
      presenter.setPaymentErrorMessage(
        error.message ?? 'Erreur inconnue, veuillez réessayer plus tard'
      );
    } else if (paymentIntent) {
      presenter.payementSucceeded();
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
              // onChange={e => setCardholderName(e.target.value)}
              required
            />
            <div>
              <br />
              <CardElement options={CARD_OPTIONS} onChange={e => updateErrorDisplay(e)} />
            </div>
            <br />
            {paymentErrorMessage && (
              <InputLabel className={classes.labelRootError}>{paymentErrorMessage}</InputLabel>
            )}
          </fieldset>
        </GridItem>
        <GridItem>
          <Button
            color="info"
            fullWidth={true}
            onClick={() => handleClick()}
            className={classes.payementButton}
            disabled={!['initial', 'succeeded', 'error'].includes(paymentStatus) || !stripe}>
            Payer {formatAmountForDisplay(totalPrice, 'eur')}
          </Button>
          <PaymentStatus status={paymentStatus} />
        </GridItem>
      </GridContainer>
    </>
  );
};

export default StripePaymentForm;
