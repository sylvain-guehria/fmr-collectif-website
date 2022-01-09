import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from 'components/lib/CustomButtons/Button';
import Close from '@material-ui/icons/Close';
import javascriptStyles from 'styles/jss/nextjs-material-kit-pro/pages/componentsSections/javascriptStyles.js';

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
      onClose={() => onClose()}
      aria-labelledby="classic-modal-slide-title"
      aria-describedby="classic-modal-slide-description">
      <DialogTitle id="classic-modal-slide-title" disableTypography className={classes.modalHeader}>
        <Button
          simple
          className={classes.modalCloseButton}
          key="close"
          aria-label="Close"
          onClick={() => closeModal()}>
          <Close className={classes.modalClose} />
        </Button>
        <h4 className={classes.modalTitle}>Modal title</h4>
      </DialogTitle>
      <DialogContent id="classic-modal-slide-description" className={classes.modalBody}>
        <p>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
          the Semantics, a large language ocean. A small river named Duden flows by their place and
          supplies it with the necessary regelialia. It is a paradisematic country, in which roasted
          parts of sentences fly into your mouth. Even the all-powerful Pointing has no control
          about the blind texts it is an almost unorthographic life One day however a small line of
          blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
        </p>
      </DialogContent>
      <DialogActions className={classes.modalFooter}>
        <Button link>Nice Button</Button>
        <Button onClick={() => closeModal()} color="danger" simple>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PayementDoneModal;
