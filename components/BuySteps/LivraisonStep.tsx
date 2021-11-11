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
import { UseFormRegister } from 'react-hook-form';
import { getError } from '../../components/forms/formUtils';
import { BuyFormType } from './BuySteps';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(profilePageStyle);

type Props = {
  register: UseFormRegister<BuyFormType>;
};

const LivraisonStep: React.FC<Props> = ({ register }) => {
  const classes = useStyles();
  const [remiseEnMainProporeChecked, setRemiseEnMainProporeChecked] = useState(false);
  const [livraisonChecked, setLivraisonChecked] = useState(false);
  const [identicalShippingAddressChecked, setIdenticalShippingAddressChecked] = useState(false);

  const handleClickRemiseEnMainPropore = (): void => {
    if (remiseEnMainProporeChecked) {
      setRemiseEnMainProporeChecked(false);
      setLivraisonChecked(true);
    } else {
      setRemiseEnMainProporeChecked(true);
      setLivraisonChecked(false);
    }
  };

  const handleClickLivraison = (): void => {
    if (livraisonChecked) {
      setLivraisonChecked(false);
      setRemiseEnMainProporeChecked(true);
    } else {
      setLivraisonChecked(true);
      setRemiseEnMainProporeChecked(false);
    }
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
          &nbsp;
          <FormControlLabel
            classes={{
              label: classes.label,
            }}
            control={
              <input
                checked={remiseEnMainProporeChecked}
                onClick={() => handleClickRemiseEnMainPropore()}
                type="checkbox"
                // {...register('remiseEnMainProporeChecked')}
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
                // {...register('livraisonChecked')}
                id="livraisonChecked"
              />
            }
            label={<span>Colissimo. Frais de port 4,95 €</span>}
          />
        </GridItem>
        <GridItem className={classes.gridItem}>
          <h4>Adresse de facturation</h4>
          <form>
            <CustomInput
              labelText="Nom et prénom"
              id="float"
              formControlProps={{
                fullWidth: true,
              }}
            />
            <CustomInput
              labelText="Adresse"
              id="float"
              formControlProps={{
                fullWidth: true,
              }}
            />
            <CustomInput
              labelText="Phone"
              id="float"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </form>
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
                  // {...register('remiseEnMainProporeChecked')}
                  id="identicalShippingAddressChecked"
                />
              }
              label={<span>Identique à l&apos;adresse de facturation.</span>}
            />
            {!identicalShippingAddressChecked && (
              <form>
                <CustomInput
                  labelText="Nom et prénom"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  // error={getError(errors, 'fullName')}
                  inputProps={{
                    ...register('lastName'),
                    // startAdornment: (
                    //   <InputAdornment position="start" className={classes.inputAdornment}>
                    //     <Face className={classes.inputAdornmentIcon} />
                    //   </InputAdornment>
                    // ),
                    placeholder: 'Nom...',
                  }}
                />
                <CustomInput
                  labelText="Adresse"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
                <CustomInput
                  labelText="Phone"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </form>
            )}
          </GridItem>
        )}
      </GridContainer>
      <Button color="info" round style={{ position: 'absolute', bottom: 15, right: 15 }}>
        <>
          Validé la livraison <KeyboardArrowRight />
        </>
      </Button>
    </>
  );
};
export default LivraisonStep;
