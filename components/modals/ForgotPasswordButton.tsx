import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import ResetPasswordForm from '../forms/login/ResetPasswordForm';
import Button from '../lib/CustomButtons/Button';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function rand(): number {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle(): { top: string; left: string; transform: string } {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

const ForgotPasswordButton: React.FC = (): React.ReactElement => {
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();

  const openModal = (): void => {
    setOpen(true);
  };

  const closeModal = (): void => {
    setOpen(false);
  };

  return (
    <div>
      <Button simple color="danger" size="sm" onClick={openModal}>
        <>
          mots de passe oublié <br />
          <HelpOutlineIcon style={{ paddingBottom: '2px' }} />
        </>
      </Button>
      <Modal
        open={open}
        onClose={closeModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
        <div style={modalStyle} className={classes.paper}>
          <ResetPasswordForm closeModal={closeModal} />
        </div>
      </Modal>
    </div>
  );
};
export default ForgotPasswordButton;
