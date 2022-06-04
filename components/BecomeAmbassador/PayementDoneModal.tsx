import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from 'components/lib/CustomButtons/Button';
import javascriptStyles from 'styles/jss/nextjs-material-kit-pro/modalStyle';
import Image from 'next/image';
import Favorite from '@mui/icons-material/Favorite';
import CheckCircleOutline from '@mui/icons-material/CheckCircleOutline';
import Cancel from '@mui/icons-material/Cancel';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(javascriptStyles);

type PayementDoneModalProps = {
  isOpen: boolean;
  hasPayementSucceeded: boolean;
  onClose: () => void;
  closeModal: () => void;
  closeModalAndRedirectHome: () => void;
};

const PayementDoneModal: React.FC<PayementDoneModalProps> = ({
  isOpen,
  onClose,
  closeModal,
  hasPayementSucceeded,
  closeModalAndRedirectHome,
}) => {
  const classes = useStyles();
  return (
    <Dialog
      classes={{
        root: classes.modalRoot,
        paper: classes.modal,
      }}
      open={isOpen}
      keepMounted
      disableBackdropClick
      disableEscapeKeyDown
      onClose={() => onClose()}
      aria-labelledby="classic-modal-slide-title"
      aria-describedby="classic-modal-slide-description">
      <DialogTitle
        id="classic-modal-slide-title"
        disableTypography
        className={`${classes.modalHeader} ${classes.flex}`}>
        <h4 className={classes.modalTitle}>
          {hasPayementSucceeded ? 'Paiement réussi' : ' echec du paiement'}
        </h4>
        <Image src="/img/fmr-logo-black.webp" alt="fmr logo" width={225 / 4} height={178 / 4} />
      </DialogTitle>
      <DialogContent id="classic-modal-slide-description" className={classes.modalBody}>
        {hasPayementSucceeded && (
          <>
            <CheckCircleOutline className={classes.bigIconGreen} />
            <div style={{ textAlign: 'left' }}>
              <p>Nous avons bien reçu votre commande, vous recevrez la facture par email.</p>
              <p>
                L&apos;équipe FMR vous remercie et vous donne RDV bientôt pour son prochain
                évènement
                <Favorite className={classes.icon} />
              </p>
            </div>
          </>
        )}
        {!hasPayementSucceeded && (
          <>
            <Cancel className={classes.bigIconRed} />
            <div style={{ textAlign: 'left' }}>
              <p>Il semblerait que le paiement ai rencontré un problème.</p>
              <p>
                Veuillez rééssayer, si le problème persiste vérifier votre moyen de paiement et
                contacter l&apos;association au besoin.
              </p>
            </div>
          </>
        )}
      </DialogContent>
      <DialogActions className={classes.modalFooter}>
        <Button
          onClick={hasPayementSucceeded ? () => closeModalAndRedirectHome() : () => closeModal()}
          color={hasPayementSucceeded ? 'success' : 'danger'}
          simple
          size="lg">
          {hasPayementSucceeded ? "Fermer et revenir à l'accueil" : 'Fermer'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PayementDoneModal;
