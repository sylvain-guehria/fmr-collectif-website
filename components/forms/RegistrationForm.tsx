import React, { useEffect } from 'react';

import { RegistrationFormData } from './RegistrationFormData';

// @material-ui/core components
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
import Check from "@material-ui/icons/Check";

// core components
import CustomInput from '../CustomInput/CustomInput.js';
import Button from "../../components/CustomButtons/Button.js";

//external libs
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import signupPageStyle from "../../styles/jss/nextjs-material-kit-pro/pages/signupPageStyle.js";

const useStyles = makeStyles(signupPageStyle);

const RegistrationForm = () => {
    const classes = useStyles();
    const [checked, setChecked] = React.useState([1]);

    const handleToggle = (value: number) => {
        console.log(value)
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };

    const { control, handleSubmit, formState: { errors } } = useForm<RegistrationFormData>();

    const onSubmit: SubmitHandler<RegistrationFormData> = (data: RegistrationFormData) => {
        console.log(data)
    };

    useEffect(() => {
        console.log({ errors })
    },[errors])

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
            <Controller
                name="firstName"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => <CustomInput
                    formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses,
                    }}
                    inputProps={{
                        field,
                        // error: errors.firstName?.message,
                        startAdornment: (
                            <InputAdornment
                                position='start'
                                className={classes.inputAdornment}
                            >
                                <Face className={classes.inputAdornmentIcon} />
                            </InputAdornment>
                        ),
                        placeholder: 'First Name...'
                    }}
                />}
            />
            <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => <CustomInput
                    formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses,
                    }}
                    inputProps={{
                        field,
                        // error: errors.email?.message,
                        startAdornment: (
                            <InputAdornment
                                position='start'
                                className={classes.inputAdornment}
                            >
                                <Email className={classes.inputAdornmentIcon} />
                            </InputAdornment>
                        ),
                        placeholder: 'Email...'
                    }}
                />
                }
            />
            <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => <CustomInput
                    formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses,
                    }}
                    inputProps={{
                        field,
                        // error: errors.password?.message,
                        startAdornment: (
                            <InputAdornment
                                position='start'
                                className={classes.inputAdornment}
                            >
                                <Icon className={classes.inputAdornmentIcon}>
                                    lock_outline
                        </Icon>
                            </InputAdornment>
                        ),
                        placeholder: 'Password...'
                    }}
                />}
            />
            {/* <FormControlLabel
                classes={{
                    label: classes.label,
                }}
                control={
                    <Checkbox
                        tabIndex={-1}
                        onClick={() => handleToggle(1)}
                        checkedIcon={
                            <Check className={classes.checkedIcon} />
                        }
                        icon={<Check className={classes.uncheckedIcon} />}
                        classes={{
                            checked: classes.checked,
                            root: classes.checkRoot,
                        }}
                        checked={checked.indexOf(1) !== -1 ? true : false}
                    />
                }
                label={
                    <span>
                        I agree to the{' '}
                        <a href='#pablo'>terms and conditions</a>.
                            </span>
                }
            /> */}
            <div className={classes.textCenter}>
                {/* @ts-ignore */}
                <Button round color='primary' type='submit'>
                    S'inscrire
                          </Button>
            </div>

            {/* 
            <input {...register('email', { required: "Votre email est obligatoire" })} />
            {errors.email && <p>{errors.email.message}</p>}

            <input {...register('password', { required: "Veuillez entrer un mot de passe" })} />
            {errors.password && <p>{errors.password.message}</p>}

            <input type='submit' /> */}
        </form>
    );

}

export default RegistrationForm;