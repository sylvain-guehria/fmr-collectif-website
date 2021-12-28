import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Home from '@material-ui/icons/Home';
import Visibility from '@material-ui/icons/Visibility';
import NavPills from 'components/lib/NavPills/NavPills.js';
import Clearfix from 'components/lib/Clearfix/Clearfix.js';
import { useRouter } from 'next/router';

import LivraisonStep from './LivraisonStep';
import ResumeStep from './ResumeStep';
import PaiementStep from './PaiementStep';
import { useBoutique } from '../../hooks/useBoutique';
import { useForm, SubmitHandler } from 'react-hook-form';
import { validationSchema } from './BuyFormValidation';
import { yupResolver } from '@hookform/resolvers/yup';

import profilePageStyle from 'styles/jss/nextjs-material-kit-pro/pages/profilePageStyle.js';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(profilePageStyle);

export interface BuyFormType {
  remiseEnMainPropreChecked?: boolean;
  livraisonChecked?: boolean;
  identicalShippingAddressChecked?: boolean;
  shouldSelectLivraisonOrRemiseEnMainPropre?: boolean;
  billingFullName: string;
  billingAddress: string;
  billingPhone: string;
  shippingFullName?: string;
  shippingAddress?: string;
  shippingPhone?: string;
}

const BuySteps: React.FC = () => {
  const classes = useStyles();
  const [forcedActive, setForcedActive] = useState(-1);
  const [shippingData, setShippingData] = useState({
    billingFullName: '',
    billingAddress: '',
    billingPhone: '',
  });
  const { boutiques } = useBoutique();
  const router = useRouter();

  useEffect(() => {
    if (!boutiques.items.length && !boutiques.tickets.length) {
      router.push('/home');
    }
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    clearErrors,
    watch,
    control,
    formState: { errors },
  } = useForm<BuyFormType>(formOptions);

  const onSubmit: SubmitHandler<BuyFormType> = async (data: BuyFormType) => {
    setShippingData(data);
    goNextTab();
  };

  const goNextTab = (): void => {
    setForcedActive(forcedActive + 1);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <div className={classes.profileTabs}>
            <NavPills
              alignCenter
              color="info"
              forcedActive={forcedActive}
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
                      control={control}
                    />
                  ),
                },
                {
                  tabButton: 'Resumé',
                  tabIcon: Visibility,
                  tabContent: <ResumeStep shippingData={shippingData} goNextTab={goNextTab} />,
                },
                {
                  tabButton: 'Paiement',
                  tabIcon: CheckCircle,
                  tabContent: <PaiementStep shippingData={shippingData} />,
                },
              ]}
            />
          </div>
          <Clearfix />
        </div>
      </div>
    </form>
  );
};
export default BuySteps;
