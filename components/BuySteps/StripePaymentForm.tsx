/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';

import { formatAmountForDisplay } from './../../stripe/stripe-helpers';

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import GridContainer from 'components/lib/Grid/GridContainer';
import GridItem from 'components/lib/Grid/GridItem';
import Button from './../lib/CustomButtons/Button';
import { InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from 'styles/jss/nextjs-material-kit-pro/components/customInputStyle';
import { StripeCardElementChangeEvent } from '@stripe/stripe-js';
import PaymentStatus from './PaymentStatus';
import BuyPresenter from './mvp/BuyPresenter';

const CARD_OPTIONS = {
  iconStyle: 'solid' as const,
  hidePostalCode: true,
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
  paymentStatus: string;
  paymentErrorMessage: string;
};

const StripePaymentForm: React.FC<StripePaymentFormProps> = ({
  totalPrice,
  paymentErrorMessage,
  paymentStatus,
  presenter,
}) => {
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
    presenter.startStripePayement(stripe, elements, CardElement);
  };

  return (
    <>
      <GridContainer justify="center">
        <GridItem>
          <fieldset style={{ borderRadius: '8px', padding: '16px' }}>
            <legend className={classes.legend}>Détails du paiement:</legend>
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
