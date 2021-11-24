import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Home from '@material-ui/icons/Home';
import Visibility from '@material-ui/icons/Visibility';
import NavPills from 'components/lib/NavPills/NavPills.js';
import Clearfix from 'components/lib/Clearfix/Clearfix.js';

import LivraisonStep from './LivraisonStep';
import ResumeStep from './ResumeStep';
import PaiementStep from './PaiementStep';
// import { useBoutique } from '../../hooks/useBoutique';
import { useForm, SubmitHandler } from 'react-hook-form';
import { validationSchema } from './BuyFormValidation';
import { yupResolver } from '@hookform/resolvers/yup';

import profilePageStyle from 'styles/jss/nextjs-material-kit-pro/pages/profilePageStyle.js';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(profilePageStyle);

export interface BuyFormType {
  remiseEnMainProporeChecked: boolean;
  livraisonChecked: boolean;
  identicalShippingAddressChecked: boolean;
  shouldSelectLivraisonOrRemiseEnMainPropre: boolean;
  billingFullName: string;
  billingAddress: string;
  billingPhone: string;
  shippingFullName: string;
  shippingAddress: string;
  shippingPhone: string;
}

const BuySteps: React.FC = () => {
  const classes = useStyles();
  // const { boutiques } = useBoutique();

  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    clearErrors,
    watch,
    formState: { errors },
  } = useForm<BuyFormType>(formOptions);

  const onSubmit: SubmitHandler<BuyFormType> = async (data: BuyFormType) => {
    // eslint-disable-next-line no-console
    console.log('submit ---------', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.profileTabs}>
              <NavPills
                alignCenter
                color="primary"
                tabs={[
                  {
                    tabButton: 'Livraison',
                    tabIcon: Home,
                    tabContent: (
                      <LivraisonStep
                        register={register}
                        errors={errors}
                        setValue={setValue}
                        getValues={getValues}
                        clearErrors={clearErrors}
                        watch={watch}
                      />
                    ),
                  },
                  {
                    tabButton: 'Resumé',
                    tabIcon: Visibility,
                    tabContent: <ResumeStep />,
                  },
                  {
                    tabButton: 'Paiement',
                    tabIcon: CheckCircle,
                    tabContent: <PaiementStep />,
                  },
                ]}
              />
            </div>
            <Clearfix />
          </div>
        </div>
      </div>
    </form>
  );
};
export default BuySteps;
