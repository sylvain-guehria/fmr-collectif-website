import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// core components
import Header from 'components/Header/Header';
import HeaderLinks from 'components/Header/HeaderLinks';
import GridContainer from 'components/lib/Grid/GridContainer';
import GridItem from 'components/lib/Grid/GridItem';
import Parallax from 'components/lib/Parallax/Parallax';
import BuySteps from './BuySteps';
import { Elements } from '@stripe/react-stripe-js';
import getStripe from '../../stripe/stripe';
import BuyPresenter from './mvp/BuyPresenter';
import { Boutiques, useBoutique } from '../../hooks/useBoutique';
import withMVP from '../../sharedKernel/mvp/withMvp';
import { BuyStepsViewModel } from './mvp/type';

import styles from 'styles/jss/nextjs-material-kit-pro/pages/ecommerceStyle';
import { useAuth } from 'hooks/useAuth';
import { itemServiceDi, ticketServiceDi, userServiceDi } from 'di';
import ItemEntity from 'modules/item/ItemEntity';
import { fetchPostJSON } from 'stripe/api-helpers';
import TicketEntity from 'modules/ticket/TicketEntity';
import UserEntity from 'modules/user/UserEntity';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(styles);

type Props = {
  viewModel: BuyStepsViewModel;
  presenter: BuyPresenter;
};

const Buy: React.FC<Props> = ({ presenter, viewModel }) => {
  const classes = useStyles();
  const stripePromise = getStripe();
  const { resetBoutiques, addModificationPrice } = useBoutique();

  presenter.setEmptyBoutiques(resetBoutiques);
  presenter.setAddModificationPrice(addModificationPrice);

  return (
    <div>
      <Header
        brand="Accueil Fmr"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: 'info',
        }}
      />
      <Parallax image="/img/examples/clark-street-merc.jpg" filter="dark" small>
        <div className={classes.container}>
          <GridContainer>
            <GridItem className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}>
              <div className={classes.brand}>
                <h1 className={classes.title}>Pour finaliser votre commande</h1>
                <h4>Suivez les étapes ci-dessous</h4>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes.container}>
        {stripePromise && (
          <Elements stripe={stripePromise}>
            <BuySteps presenter={presenter} viewModel={viewModel} />
          </Elements>
        )}
      </div>
    </div>
  );
};

const makeBuyPresenter = (): BuyPresenter => {
  return new BuyPresenter({
    buyNumberOfItems: (item: ItemEntity, quantityBought: number) =>
      itemServiceDi.buyNumberOfItems(item, quantityBought),
    buyNumberOfTickets: (ticket: TicketEntity, quantityBought: number) =>
      ticketServiceDi.buyNumberOfTickets(ticket, quantityBought),
    fetchPostJSON: (path: string, params: Record<string, unknown>) => fetchPostJSON(path, params),
    addInUserHistory: (idsAndQuantitiesAndUser: addInUserHistoryParamsType) =>
      userServiceDi.addInUserHistory(idsAndQuantitiesAndUser),
  });
};

const useDynamicDependencies = (): BuyPresenterDynamicDependenciesType => {
  const { boutiques, getTotalPrice } = useBoutique();
  const { user } = useAuth();
  return {
    boutiques: boutiques,
    user: user,
    totalPrice: getTotalPrice(),
  };
};

export default withMVP(makeBuyPresenter, useDynamicDependencies)(Buy);

type addInUserHistoryParamsType = {
  itemsQuantityBought: Record<string, number>;
  ticketsQuantityBought: Record<string, number>;
  user: UserEntity;
};

type BuyPresenterDynamicDependenciesType = {
  boutiques: Boutiques;
  user: UserEntity;
  totalPrice: number;
};
