import React, { useState } from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';

import { validationSchema } from './ContactUsFormValidation';

import Card from 'components/lib/Card/Card';
import CardHeader from 'components/lib/Card/CardHeader';
import CardBody from 'components/lib/Card/CardBody';
import CardFooter from 'components/lib/Card/CardFooter';
import GridContainer from 'components/lib/Grid/GridContainer';
import GridItem from 'components/lib/Grid/GridItem';

import CustomInput from '../../lib/CustomInput/CustomInput';
import Button from '../../lib/CustomButtons/Button';

import { getError } from '../formUtils';

import contactsStyle from 'styles/jss/nextjs-material-kit-pro/pages/sectionsSections/contactsStyle';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(contactsStyle);

interface ContactUsFormType {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  notARobot: boolean;
}

const ContactUsForm: React.FC = (): React.ReactElement => {
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
  } = useForm<ContactUsFormType>(formOptions);

  const onSubmit: SubmitHandler<ContactUsFormType> = async (data: ContactUsFormType) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { firstName, lastName, email, message, notARobot } = data;
    // registerWithEmailUseCase({ firstName, lastName, email, message, notARobot });
  };

  return (
    <Card className={classes.card1}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardHeader contact color="primary" className={classes.textCenter}>
          <h4 className={classes.cardTitle}>Contact Us</h4>
        </CardHeader>
        <CardBody>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <CustomInput
                labelText="Prénom *"
                formControlProps={{
                  fullWidth: true,
                }}
                error={getError(errors, 'firstName')}
                inputProps={{
                  ...register('firstName'),
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <CustomInput
                labelText="Nom *"
                formControlProps={{
                  fullWidth: true,
                }}
                error={getError(errors, 'lastName')}
                inputProps={{
                  ...register('lastName'),
                }}
              />
            </GridItem>
          </GridContainer>
          <CustomInput
            labelText="Email *"
            formControlProps={{
              fullWidth: true,
            }}
            error={getError(errors, 'email')}
            inputProps={{
              ...register('email'),
            }}
          />
          <CustomInput
            labelText="Votre message *"
            formControlProps={{
              fullWidth: true,
            }}
            error={getError(errors, 'message')}
            inputProps={{
              ...register('message'),
              multiline: true,
              rows: 5,
            }}
          />
        </CardBody>
        <CardFooter className={classes.justifyContentBetween}>
          <FormControlLabel
            classes={{
              label: classes.label,
            }}
            control={
              <input
                checked={checked.indexOf(1) !== -1 ? true : false}
                onClick={() => handleToggle(1)}
                type="checkbox"
                {...register('notARobot')}
              />
            }
            label={<span>Je ne suis pas un robot</span>}
          />
          <Button color="primary" type="submit" className={classes.pullRight}>
            Envoyer
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ContactUsForm;
