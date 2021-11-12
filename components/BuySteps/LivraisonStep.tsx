import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// core components
import GridContainer from 'components/lib/Grid/GridContainer.js';
import GridItem from 'components/lib/Grid/GridItem.js';
import CustomInput from '../lib/CustomInput/CustomInput';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from './../lib/CustomButtons/Button';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import profilePageStyle from 'styles/jss/nextjs-material-kit-pro/pages/profilePageStyle.js';
import { UseFormRegister, UseFormSetValue, UseFormClearErrors } from 'react-hook-form';
import { getError } from '../../components/forms/formUtils';
import { FieldError } from 'react-hook-form';
import InputLabel from '@material-ui/core/InputLabel';

import { BuyFormType } from './BuySteps';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(profilePageStyle);

type Props = {
  register: UseFormRegister<BuyFormType>;
  errors: FormErrors;
  setValue: UseFormSetValue<BuyFormType>;
  clearErrors: UseFormClearErrors<BuyFormType>;
};

type FormErrors = {
  [key: string]: FieldError | undefined;
};

const LivraisonStep: React.FC<Props> = ({ register, errors, setValue, clearErrors }) => {
  const classes = useStyles();
  const [remiseEnMainProporeChecked, setRemiseEnMainProporeChecked] = useState(false);
  const [livraisonChecked, setLivraisonChecked] = useState(false);
  const [identicalShippingAddressChecked, setIdenticalShippingAddressChecked] = useState(false);

  const handleClickRemiseEnMainPropore = (): void => {
    if (remiseEnMainProporeChecked) {
      setRemiseEnMainProporeChecked(false);
      setLivraisonChecked(true);
      setValue('livraisonChecked', true);
    } else {
      setRemiseEnMainProporeChecked(true);
      setLivraisonChecked(false);
      setValue('livraisonChecked', false);
    }
    clearErrors('shouldSelectLivraisonOrRemiseEnMainPropre');
  };

  const handleClickLivraison = (): void => {
    if (livraisonChecked) {
      setLivraisonChecked(false);
      setRemiseEnMainProporeChecked(true);
      setValue('remiseEnMainProporeChecked', true);
    } else {
      setLivraisonChecked(true);
      setRemiseEnMainProporeChecked(false);
      setValue('remiseEnMainProporeChecked', false);
    }
    clearErrors('shouldSelectLivraisonOrRemiseEnMainPropre');
  };

  const handleClickIdenticalShippingAddress = (): void => {
    if (identicalShippingAddressChecked) {
      setIdenticalShippingAddressChecked(false);
    } else {
      setIdenticalShippingAddressChecked(true);
    }
  };

  return (
    <>
      <GridContainer spacing={5}>
        <GridItem className={classes.gridItem}>
          <h4>Mode de livraison</h4>
          <FormControlLabel
            classes={{
              label: classes.label,
            }}
            control={
              <input
                checked={remiseEnMainProporeChecked}
                onClick={() => handleClickRemiseEnMainPropore()}
                type="checkbox"
                {...register('remiseEnMainProporeChecked')}
                id="remiseEnMainProporeChecked"
              />
            }
            label={<span>Remise en main propre.</span>}
          />
          <FormControlLabel
            classes={{
              label: classes.label,
            }}
            control={
              <input
                checked={livraisonChecked}
                onClick={() => handleClickLivraison()}
                type="checkbox"
                {...register('livraisonChecked')}
                id="livraisonChecked"
              />
            }
            label={<span>Colissimo. Frais de port 4,95 €</span>}
          />
          <InputLabel error>
            <br />
            <p>{getError(errors, 'livraisonChecked')}</p>
            <p>{getError(errors, 'remiseEnMainProporeChecked')}</p>
            <p>{getError(errors, 'shouldSelectLivraisonOrRemiseEnMainPropre')}</p>
          </InputLabel>
        </GridItem>
        <GridItem className={classes.gridItem}>
          <h4>Adresse de facturation</h4>
          <CustomInput
            formControlProps={{
              fullWidth: true,
            }}
            error={getError(errors, 'billingFullName')}
            inputProps={{
              ...register('billingFullName'),
              placeholder: 'Nom et prénom',
            }}
          />
          <CustomInput
            formControlProps={{
              fullWidth: true,
            }}
            error={getError(errors, 'billingAddress')}
            inputProps={{
              ...register('billingAddress'),
              placeholder: 'Adresse',
            }}
          />
          <CustomInput
            formControlProps={{
              fullWidth: true,
            }}
            error={getError(errors, 'billingPhone')}
            inputProps={{
              ...register('billingPhone'),
              placeholder: 'Téléphone',
            }}
          />
        </GridItem>
        {livraisonChecked && (
          <GridItem className={classes.gridItem}>
            <h4>Adresse de livraison</h4>
            &nbsp;
            <FormControlLabel
              classes={{
                label: classes.label,
              }}
              control={
                <input
                  checked={identicalShippingAddressChecked}
                  onClick={() => handleClickIdenticalShippingAddress()}
                  type="checkbox"
                  {...register('identicalShippingAddressChecked')}
                  id="identicalShippingAddressChecked"
                />
              }
              label={<span>Identique à l&apos;adresse de facturation.</span>}
            />
            {!identicalShippingAddressChecked && (
              <>
                <CustomInput
                  formControlProps={{
                    fullWidth: true,
                  }}
                  error={getError(errors, 'shippingFullName')}
                  inputProps={{
                    ...register('shippingFullName'),
                    placeholder: 'Nom et prénom',
                  }}
                />
                <CustomInput
                  formControlProps={{
                    fullWidth: true,
                  }}
                  error={getError(errors, 'shippingAddress')}
                  inputProps={{
                    ...register('shippingAddress'),
                    placeholder: 'Adresse',
                  }}
                />
                <CustomInput
                  formControlProps={{
                    fullWidth: true,
                  }}
                  error={getError(errors, 'shippingPhone')}
                  inputProps={{
                    ...register('shippingPhone'),
                    placeholder: 'Téléphone',
                  }}
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
          Validé la livraison <KeyboardArrowRight />
        </>
      </Button>
    </>
  );
};
export default LivraisonStep;
