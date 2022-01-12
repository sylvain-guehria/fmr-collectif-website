import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from 'components/lib/CustomButtons/Button';
import javascriptStyles from 'styles/jss/nextjs-material-kit-pro/modalStyle.js';
import Image from 'next/image';
import Favorite from '@material-ui/icons/Favorite';
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(javascriptStyles);

type PayementDoneModalProps = {
  isOpen: boolean;
  onClose: () => void;
  closeModal: () => void;
};

const PayementDoneModal: React.FC<PayementDoneModalProps> = ({ isOpen, onClose, closeModal }) => {
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
        <h4 className={classes.modalTitle}>Paiement réussi</h4>
        <Image src="/img/fmr-logo-black.webp" alt="fmr logo" width={225 / 4} height={178 / 4} />
      </DialogTitle>
      <DialogContent id="classic-modal-slide-description" className={classes.modalBody}>
        <CheckCircleOutline className={classes.bigIconGreen} />
        <div style={{ textAlign: 'left' }}>
          <p>Nous avons bien reçu votre commande, vous recevrez la facture par email.</p>
          <p>
            L&apos;équipe FMR vous remercie et vous donne RDV bientôt pour son prochain évènement
            <Favorite className={classes.icon} />
          </p>
        </div>
      </DialogContent>
      <DialogActions className={classes.modalFooter}>
        <Button onClick={() => closeModal()} color="success" simple size="lg">
          Fermer et revenir à l&apos;accueil
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PayementDoneModal;
