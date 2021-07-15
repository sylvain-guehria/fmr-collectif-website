import React, { useState, ReactElement } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface Props {
  childButton: ReactElement;
  dialogMessage: string;
  dialogTitle: string;
  onConfirm: () => Promise<void>;
}
const AlertDialog: React.FC<Props> = ({ childButton, dialogMessage, dialogTitle, onConfirm }) => {
  const [open, setOpen] = useState(false);

  const handleCancel = (): void => {
    setOpen(false);
  };

  const handleConfirm = (): void => {
    onConfirm();
    setOpen(false);
  };

  return (
    <div>
      <div onClick={() => setOpen(true)} role="presentation">
        {childButton}
      </div>
      <Dialog
        open={open}
        onClose={handleCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{dialogMessage}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Annuler
          </Button>
          <Button onClick={handleConfirm} color="primary">
            Confirmer
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
