import React, { useState } from 'react';

import { validationSchema } from './RegisterFormValidation';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
import InputLabel from '@material-ui/core/InputLabel';

import Face from '@mui/icons-material/Face';
import Email from '@mui/icons-material/Email';

import CustomInput from '../../lib/CustomInput/CustomInput';
import Button from '../../lib/CustomButtons/Button';

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

import signupPageStyle from '../../../styles/jss/nextjs-material-kit-pro/pages/signupPageStyle.js';

import { getError } from '../formUtils';
import { useAuth } from '../../../hooks/useAuth';
import { useRouter } from 'next/router';
import { registerWithEmailUseCase } from '../../../usecases';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(signupPageStyle);

interface RegisterFormType {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  acceptTerms: boolean;
}

const RegisterForm: React.FC = (): React.ReactElement => {
  const classes = useStyles();
  const [checked, setChecked] = useState([0]);
  const auth = useAuth();
  const router = useRouter();

  const handleToggle = (value: number): void => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormType>(formOptions);

  const onSubmit: SubmitHandler<RegisterFormType> = async (data: RegisterFormType) => {
    const { email, password, firstName, lastName } = data;
    registerWithEmailUseCase(auth, router, { firstName, lastName, email, password });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <CustomInput
        formControlProps={{
          fullWidth: true,
        }}
        error={getError(errors, 'firstName')}
        inputProps={{
          ...register('firstName'),
          startAdornment: (
            <InputAdornment position="start" className={classes.inputAdornment}>
              <Face className={classes.inputAdornmentIcon} />
            </InputAdornment>
          ),
          placeholder: 'Prénom...',
        }}
      />
      <CustomInput
        formControlProps={{
          fullWidth: true,
        }}
        error={getError(errors, 'lastName')}
        inputProps={{
          ...register('lastName'),
          startAdornment: (
            <InputAdornment position="start" className={classes.inputAdornment}>
              <Face className={classes.inputAdornmentIcon} />
            </InputAdornment>
          ),
          placeholder: 'Nom...',
        }}
      />
      <CustomInput
        formControlProps={{
          fullWidth: true,
        }}
        error={getError(errors, 'email')}
        inputProps={{
          ...register('email'),
          startAdornment: (
            <InputAdornment position="start" className={classes.inputAdornment}>
              <Email className={classes.inputAdornmentIcon} />
            </InputAdornment>
          ),
          placeholder: 'Email...',
        }}
      />
      <CustomInput
        error={getError(errors, 'password')}
        formControlProps={{
          fullWidth: true,
        }}
        inputProps={{
          ...register('password'),
          startAdornment: (
            <InputAdornment position="start" className={classes.inputAdornment}>
              <Icon className={classes.inputAdornmentIcon}>lock_outline</Icon>
            </InputAdornment>
          ),
          placeholder: 'Mot de passe...',
        }}
      />
      <CustomInput
        error={getError(errors, 'confirmPassword')}
        formControlProps={{
          fullWidth: true,
        }}
        inputProps={{
          ...register('confirmPassword'),
          startAdornment: (
            <InputAdornment position="start" className={classes.inputAdornment}>
              <Icon className={classes.inputAdornmentIcon}>lock_outline</Icon>
            </InputAdornment>
          ),
          placeholder: 'confirmez votre mot de passe...',
        }}
      />
      <FormControlLabel
        classes={{
          label: classes.label,
        }}
        control={
          <input
            checked={checked.indexOf(1) !== -1 ? true : false}
            onClick={() => handleToggle(1)}
            type="checkbox"
            {...register('acceptTerms')}
            id="acceptTerms"
          />
        }
        label={
          <span>
            J&apos;accepte les <a href="#pablo">termes et conditions</a>.
          </span>
        }
      />

      <InputLabel error>
        <br />
        <p>{getError(errors, 'acceptTerms')}</p>
      </InputLabel>

      <div className={classes.textCenter}>
        <Button round color="primary" type="submit">
          {"S'inscrire"}
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
