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
          <CircularProgress /> Chargement...
        </h2>
      );

    case 'requires_action':
      return (
        <h2>
          <CircularProgress />
          En cours d&apos;authentification...
        </h2>
      );

    case 'succeeded':
      return (
        <h2>
          <>Paiement réussi 🥳</>
        </h2>
      );

    case 'error':
      return (
        <h2>
          <>Erreur 😭</>
        </h2>
      );
    case 'notEnoughQuantityInStock':
      return (
        <h2>
          <>L&apos;un de vos article n&apos;est pas disponible en stock </>
        </h2>
      );
    default:
      return null;
  }
};

export default PaymentStatus;
