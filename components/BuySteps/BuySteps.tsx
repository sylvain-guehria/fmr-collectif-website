import React, { useEffect } from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircle from '@mui/icons-material/CheckCircle';
import Home from '@mui/icons-material/Home';
import Visibility from '@mui/icons-material/Visibility';
import NavPills from 'components/lib/NavPills/NavPills.js';
import Clearfix from 'components/lib/Clearfix/Clearfix.js';
import { useRouter } from 'next/router';

import LivraisonStep from './LivraisonStep';
import ResumeStep from './ResumeStep';
import PaiementStep from './PaiementStep';
import { useForm, SubmitHandler } from 'react-hook-form';
import { validationSchema } from './BuyFormValidation';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import BuyPresenter from './mvp/BuyPresenter';
import { BuyStepsViewModel } from './mvp/type';

import profilePageStyle from 'styles/jss/nextjs-material-kit-pro/pages/profilePageStyle.js';
import PayementDoneModal from './PayementDoneModal';

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

type Props = {
  viewModel: BuyStepsViewModel;
  presenter: BuyPresenter;
};

const BuySteps: React.FC<Props> = ({ presenter, viewModel }) => {
  const classes = useStyles();
  const router = useRouter();

  useEffect(() => {
    if (!viewModel.boutiques.items.length && !viewModel.boutiques.tickets.length) {
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
    presenter.setShippingData(data);
    presenter.goNextTab();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.profileTabs}>
              <NavPills
                alignCenter
                color="info"
                goNextTab={viewModel.goNextTab}
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
                    tabContent: (
                      <ResumeStep viewModel={viewModel} goNextTab={() => presenter.goNextTab()} />
                    ),
                  },
                  {
                    tabButton: 'Paiement',
                    tabIcon: CheckCircle,
                    tabContent: <PaiementStep viewModel={viewModel} presenter={presenter} />,
                  },
                ]}
              />
            </div>
            <Clearfix />
          </div>
        </div>
      </form>
      <PayementDoneModal
        isOpen={viewModel.isSucceededPayementModalOpen}
        onClose={() => presenter.onClosePayementModal()}
        closeModal={() => presenter.closeSucceededPayementModal()}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"></PayementDoneModal>
    </>
  );
};
export default BuySteps;
