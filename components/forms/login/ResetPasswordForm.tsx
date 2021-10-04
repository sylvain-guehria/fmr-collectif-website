import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAuth } from '../../../hooks/useAuth';

import InputAdornment from '@material-ui/core/InputAdornment';
import Email from '@material-ui/icons/Email';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import CustomInput from '../../lib/CustomInput/CustomInput.js';
import Button from '../../lib/CustomButtons/Button';
import CardBody from '../../lib/Card/CardBody';

interface LoginFormType {
  email: string;
}

interface Props {
  closeModal: () => void;
}

const ResetPasswordForm: React.FC<Props> = ({ closeModal }): React.ReactElement => {
  const auth = useAuth();

  const onSubmit: SubmitHandler<LoginFormType> = async ({ email }: LoginFormType) => {
    await auth.sendPasswordResetEmail(email);
    closeModal();
  };

  const { register, handleSubmit } = useForm<LoginFormType>();

  return (
    <form id={'resetPasswordForm'}>
      Si votre email existe nous vous enverrons un email de réinitialisation du mot de passe
      <CardBody signup>
        <CustomInput
          formControlProps={{
            fullWidth: true,
          }}
          inputProps={{
            ...register('email'),
            placeholder: 'Email',
            type: 'email',
            startAdornment: (
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            ),
          }}
        />
      </CardBody>
      <Button simple color="danger" size="lg" onClick={handleSubmit(onSubmit)}>
        <>
          <RotateLeftIcon /> réinitialiser mot de passe
        </>
      </Button>
    </form>
  );
};

export default ResetPasswordForm;
