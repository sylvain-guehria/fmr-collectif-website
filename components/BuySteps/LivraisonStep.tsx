import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// core components
import GridContainer from 'components/lib/Grid/GridContainer.js';
import GridItem from 'components/lib/Grid/GridItem.js';
import CustomInput from '../lib/CustomInput/CustomInput';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from './../lib/CustomButtons/Button';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Tooltip from '@material-ui/core/Tooltip';

import profilePageStyle from 'styles/jss/nextjs-material-kit-pro/pages/profilePageStyle.js';
import {
  UseFormRegister,
  UseFormGetValues,
  UseFormSetValue,
  UseFormClearErrors,
  UseFormWatch,
  Control,
  Controller,
  FieldError,
} from 'react-hook-form';
import { getError } from '../../components/forms/formUtils';
import InputLabel from '@material-ui/core/InputLabel';

import { BuyFormType } from './BuySteps';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(profilePageStyle);

type Props = {
  register: UseFormRegister<BuyFormType>;
  errors: FormErrors;
  setValue: UseFormSetValue<BuyFormType>;
  getValues: UseFormGetValues<BuyFormType>;
  clearErrors: UseFormClearErrors<BuyFormType>;
  watch: UseFormWatch<BuyFormType>;
  control: Control<BuyFormType>;
};

type FormErrors = {
  [key: string]: FieldError | undefined;
};

const LivraisonStep: React.FC<Props> = ({
  register,
  errors,
  setValue,
  clearErrors,
  getValues,
  watch,
  control,
}) => {
  const classes = useStyles();
  const showShippingChoice = watch('livraisonChecked', false);
  const showShippingInfo = watch('identicalShippingAddressChecked', false);

  const handleClickRemiseEnMainPropore = (): void => {
    setValue('livraisonChecked', getValues('remiseEnMainPropreChecked'));
    clearErrors('shouldSelectLivraisonOrRemiseEnMainPropre');
  };

  const handleClickLivraison = (): void => {
    setValue('remiseEnMainPropreChecked', getValues('livraisonChecked'));
    clearErrors('shouldSelectLivraisonOrRemiseEnMainPropre');
  };

  const handleClickIdenticalShippingAddress = (): void => {
    clearErrors('shippingPhone');
    clearErrors('shippingAddress');
    clearErrors('shippingFullName');
  };

  return (
    <>
      <GridContainer spacing={5} padding="50px">
        <GridItem className={classes.gridItem}>
          <h4>Mode de livraison</h4>
          <Tooltip title="A n'importe quel évènement FRM" classes={{ tooltip: classes.tooltip }}>
            <FormControlLabel
              classes={{
                label: classes.label,
              }}
              control={
                <input
                  onClick={() => handleClickRemiseEnMainPropore()}
                  type="checkbox"
                  {...register('remiseEnMainPropreChecked')}
                />
              }
              label={<span>Remise en main propre.</span>}
            />
          </Tooltip>

          <FormControlLabel
            classes={{
              label: classes.label,
            }}
            control={
              <input
                onClick={() => handleClickLivraison()}
                type="checkbox"
                {...register('livraisonChecked')}
              />
            }
            label={<span>Colissimo. Frais de port 4,95 €</span>}
          />
          <InputLabel error>
            <br />
            <p>{getError(errors, 'livraisonChecked')}</p>
            <p>{getError(errors, 'remiseEnMainPropreChecked')}</p>
            <p>{getError(errors, 'shouldSelectLivraisonOrRemiseEnMainPropre')}</p>
          </InputLabel>
        </GridItem>
        <GridItem className={classes.gridItem}>
          <h4>Adresse de facturation</h4>
          <Controller
            render={({ field }) => (
              <CustomInput
                formControlProps={{
                  fullWidth: true,
                }}
                error={getError(errors, 'billingFullName')}
                inputProps={{
                  ...register('billingFullName'),
                  ...field,
                  placeholder: getValues('billingFullName') || 'Nom et prénom',
                }}
              />
            )}
            name="billingFullName"
            control={control}
          />
          <Controller
            render={({ field }) => (
              <CustomInput
                formControlProps={{
                  fullWidth: true,
                }}
                error={getError(errors, 'billingAddress')}
                inputProps={{
                  ...register('billingAddress'),
                  ...field,
                  placeholder: getValues('billingAddress') || 'Adresse',
                }}
              />
            )}
            name="billingAddress"
            control={control}
          />
          <Controller
            render={({ field }) => (
              <CustomInput
                formControlProps={{
                  fullWidth: true,
                }}
                error={getError(errors, 'billingPhone')}
                inputProps={{
                  ...register('billingPhone'),
                  ...field,
                  placeholder: getValues('billingPhone') || 'Téléphone',
                }}
              />
            )}
            name="billingPhone"
            control={control}
          />
        </GridItem>
        {showShippingChoice && (
          <GridItem className={classes.gridItem}>
            <h4>Adresse de livraison</h4>
            &nbsp;
            <FormControlLabel
              classes={{
                label: classes.label,
              }}
              control={
                <input
                  onClick={() => handleClickIdenticalShippingAddress()}
                  type="checkbox"
                  {...register('identicalShippingAddressChecked')}
                />
              }
              label={<span>Identique à l&apos;adresse de facturation.</span>}
            />
            {!showShippingInfo && (
              <>
                <Controller
                  render={({ field }) => (
                    <CustomInput
                      formControlProps={{
                        fullWidth: true,
                      }}
                      error={getError(errors, 'shippingFullName')}
                      inputProps={{
                        ...register('shippingFullName'),
                        ...field,
                        placeholder: getValues('shippingFullName') || 'Nom et prénom',
                      }}
                    />
                  )}
                  name="shippingFullName"
                  control={control}
                />
                <Controller
                  render={({ field }) => (
                    <CustomInput
                      formControlProps={{
                        fullWidth: true,
                      }}
                      error={getError(errors, 'shippingAddress')}
                      inputProps={{
                        ...register('shippingAddress'),
                        ...field,
                        placeholder: getValues('shippingAddress') || 'Adresse',
                      }}
                    />
                  )}
                  name="shippingAddress"
                  control={control}
                />
                <Controller
                  render={({ field }) => (
                    <CustomInput
                      formControlProps={{
                        fullWidth: true,
                      }}
                      error={getError(errors, 'shippingPhone')}
                      inputProps={{
                        ...register('shippingPhone'),
                        ...field,
                        placeholder: getValues('shippingPhone') || 'Téléphone',
                      }}
                    />
                  )}
                  name="shippingPhone"
                  control={control}
                />
              </>
            )}
          </GridItem>
        )}
      </GridContainer>
      &nbsp;
      <Button
        color="info"
        round
        style={{ position: 'absolute', bottom: 15, right: 15 }}
        type="submit">
        <>
          Valider la livraison <KeyboardArrowRight />
        </>
      </Button>
    </>
  );
};
export default LivraisonStep;
