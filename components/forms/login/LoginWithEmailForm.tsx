import React from 'react';
import Link from 'next/link';

import { validationSchema } from './LoginFormValidation';

import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';

import Email from '@material-ui/icons/Email';

import CustomInput from '../../CustomInput/CustomInput.js';
import Button from '../../CustomButtons/Button';

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import signupPageStyle from '../../../styles/jss/nextjs-material-kit-pro/pages/signupPageStyle.js';

import { getError } from '../formUtils';
import { useAuth } from '../../../api/auth/useAuth';
import { useRouter } from 'next/router';

import Fingerprint from '@material-ui/icons/Fingerprint';
import PersonAdd from '@material-ui/icons/PersonAdd';
import CardBody from '../../Card/CardBody';
import { emailConnexionUseCase } from '../../../usecases';

// import LoadingLayer from 'components/LoadingLayer/LoadingLayer';

const useStyles = makeStyles(signupPageStyle);

interface LoginFormType {
  email: string;
  password: string;
}

const LoginWithEmailForm: React.FC = (): React.ReactElement => {
  const classes = useStyles();
  const auth = useAuth();
  const router = useRouter();

  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>(formOptions);

  const onSubmit: SubmitHandler<LoginFormType> = async ({ email, password }: LoginFormType) => {
    emailConnexionUseCase(auth, router, { email, password });
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
                <Email className={classes.inputIconsColor} />
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
                <Icon className={classes.inputIconsColor}>lock_utline</Icon>
              </InputAdornment>
            ),
            autoComplete: 'off',
          }}
        />
      </CardBody>

      <div className={classes.textCenter}>
        <Button simple color="danger" size="lg" type="submit">
          <>
            <Fingerprint className={classes.dropdownIcons} /> Se connecter
          </>
        </Button>
        <br />
        <Link href="/signup">
          <Button simple color="danger" size="lg">
            <>
              <PersonAdd className={classes.dropdownIcons} /> S&lsquo;inscrire
            </>
          </Button>
        </Link>
      </div>
    </form>
  );
};

export default LoginWithEmailForm;
