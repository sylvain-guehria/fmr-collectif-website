import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

type PaymentStatusProps = {
  status: string;
};
const PaymentStatus: React.FC<PaymentStatusProps> = ({ status }) => {
  switch (status) {
    case 'processing':
    case 'requires_payment_method':
    case 'requires_confirmation':
      return (
        <h2>
          <CircularProgress /> Processing...
        </h2>
      );

    case 'requires_action':
      return (
        <h2>
          <CircularProgress />
          Authenticating...
        </h2>
      );

    case 'succeeded':
      return (
        <h2>
          <>Payment Succeeded 🥳</>
        </h2>
      );

    case 'error':
      return (
        <h2>
          <>Error 😭</>
        </h2>
      );

    default:
      return null;
  }
};

export default PaymentStatus;
