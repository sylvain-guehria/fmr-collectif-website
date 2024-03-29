import React, { useState } from 'react';
import Link from 'next/link';

import { validationSchema } from './LoginFormValidation';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
import Email from '@mui/icons-material/Email';
import InputLabel from '@material-ui/core/InputLabel';

import CustomInput from '../../lib/CustomInput/CustomInput';
import Button from '../../lib/CustomButtons/Button';

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

import signupPageStyle from '../../../styles/jss/nextjs-material-kit-pro/pages/signupPageStyle';

import { getError } from '../formUtils';
import { useAuth } from '../../../hooks/useAuth';
import { useRouter } from 'next/router';

import Fingerprint from '@mui/icons-material/Fingerprint';
import PersonAdd from '@mui/icons-material/PersonAdd';
import CardBody from '../../lib/Card/CardBody';
import { emailConnexionUseCase } from '../../../usecases';
import ForgotPasswordButton from '../../modals/ForgotPasswordButton';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(signupPageStyle);

interface LoginFormType {
  email: string;
  password: string;
}

const LoginWithEmailForm: React.FC = (): React.ReactElement => {
  const classes = useStyles();
  const auth = useAuth();
  const router = useRouter();
  const [showResetPassword, setShowResetPassword] = useState(false);

  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>(formOptions);

  const onSubmit: SubmitHandler<LoginFormType> = async ({ email, password }: LoginFormType) => {
    const response = await emailConnexionUseCase(auth, router, { email, password });
    if (!response.email) {
      setShowResetPassword(true);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <CardBody signup>
        <CustomInput
          formControlProps={{
            fullWidth: true,
          }}
          error={getError(errors, 'email')}
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
        <CustomInput
          id="pass"
          formControlProps={{
            fullWidth: true,
          }}
          error={getError(errors, 'password')}
          inputProps={{
            ...register('password'),
            placeholder: 'Mot de passe',
            type: 'password',
            startAdornment: (
              <InputAdornment position="start">
                <Icon>lock_utline</Icon>
              </InputAdornment>
            ),
            autoComplete: 'off',
          }}
        />

        {showResetPassword && (
          <InputLabel error>
            <br />
            <ForgotPasswordButton />
          </InputLabel>
        )}
      </CardBody>

      <div className={classes.textCenter}>
        <Button simple color="danger" size="lg" type="submit">
          <>
            <Fingerprint /> Se connecter
          </>
        </Button>
        <br />
        <Link href="/signup">
          <Button simple color="danger" size="lg">
            <>
              <PersonAdd /> S&lsquo;inscrire
            </>
          </Button>
        </Link>
      </div>
    </form>
  );
};

export default LoginWithEmailForm;
