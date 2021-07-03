import React from 'react';

import InputAdornment from '@material-ui/core/InputAdornment';
import Email from '@material-ui/icons/Email';

import CustomInput from '../../CustomInput/CustomInput.js';
import Button from '../../CustomButtons/Button';

import { useForm, SubmitHandler } from 'react-hook-form';

import { useAuth } from '../../../auth/useAuth';
// import { useRouter } from 'next/router';

import Fingerprint from '@material-ui/icons/Fingerprint';
import CardBody from '../../Card/CardBody';

interface LoginFormType {
  email: string;
}

const ResetPasswordForm: React.FC = (): React.ReactElement => {
  const auth = useAuth();
  // const router = useRouter();

  const onSubmit: SubmitHandler<LoginFormType> = async ({ email }: LoginFormType) => {
    const response = await auth.sendPasswordResetEmail(email);
    // eslint-disable-next-line no-console
    console.log(response);
  };

  const { register, handleSubmit } = useForm<LoginFormType>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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

      <Button simple color="danger" size="lg" type="submit">
        <>
          <Fingerprint /> réinitialiser mot de passe
        </>
      </Button>
    </form>
  );
};

export default ResetPasswordForm;
