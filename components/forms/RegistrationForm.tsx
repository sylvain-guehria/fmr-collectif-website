import React, { useState } from 'react';

import { RegistrationFormData } from './RegistrationFormData';
import { validationSchema } from './RegisterFormValidation';

// @material-ui/core components
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
import InputLabel from '@material-ui/core/InputLabel';

import Face from '@material-ui/icons/Face';
import Email from '@material-ui/icons/Email';
import Check from '@material-ui/icons/Check';

// core components
import CustomInput from '../CustomInput/CustomInput.js';
import Button from '../../components/CustomButtons/Button.js';

//external libs
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import signupPageStyle from '../../styles/jss/nextjs-material-kit-pro/pages/signupPageStyle.js';

import { getError } from './formUtils';

const useStyles = makeStyles(signupPageStyle);

const RegistrationForm: React.FC = (): React.ReactElement => {
  const classes = useStyles();
  const [checked, setChecked] = useState([0]);

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
  } = useForm<RegistrationFormData>(formOptions);

  const onSubmit: SubmitHandler<RegistrationFormData> = (data: RegistrationFormData) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <CustomInput
        formControlProps={{
          fullWidth: true,
          className: classes.customFormControlClasses,
        }}
        error={getError(errors, 'firstName')}
        inputProps={{
          ...register('firstName'),
          startAdornment: (
            <InputAdornment position="start" className={classes.inputAdornment}>
              <Face className={classes.inputAdornmentIcon} />
            </InputAdornment>
          ),
          placeholder: 'First Name...',
        }}
      />
      <CustomInput
        formControlProps={{
          fullWidth: true,
          className: classes.customFormControlClasses,
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
          className: classes.customFormControlClasses,
        }}
        inputProps={{
          ...register('password'),
          startAdornment: (
            <InputAdornment position="start" className={classes.inputAdornment}>
              <Icon className={classes.inputAdornmentIcon}>lock_outline</Icon>
            </InputAdornment>
          ),
          placeholder: 'Password...',
        }}
      />
      <CustomInput
        error={getError(errors, 'confirmPassword')}
        formControlProps={{
          fullWidth: true,
          className: classes.customFormControlClasses,
        }}
        inputProps={{
          ...register('confirmPassword'),
          startAdornment: (
            <InputAdornment position="start" className={classes.inputAdornment}>
              <Icon className={classes.inputAdornmentIcon}>lock_outline</Icon>
            </InputAdornment>
          ),
          placeholder: 'confirm your assword...',
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
            I agree to the <a href="#pablo">terms and conditions</a>.
          </span>
        }
      />

      <InputLabel error>
        <br />
        <p>{getError(errors, 'acceptTerms')}</p>
      </InputLabel>

      <div className={classes.textCenter}>
        {/* @ts-ignore */}
        <Button round color="primary" type="submit">
          {"S'inscrire"}
        </Button>
      </div>
    </form>
  );
};

export default RegistrationForm;
