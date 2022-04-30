import React from 'react';
import GridContainer from 'components/lib/Grid/GridContainer';
import GridItem from 'components/lib/Grid/GridItem';
import InfoArea from 'components/lib/InfoArea/InfoArea';
import { makeStyles } from '@material-ui/core/styles';
import CardMembership from '@mui/icons-material/CardMembership';
import CardGiftCard from '@mui/icons-material/CardGiftcard';
import featuresStyle from 'styles/jss/nextjs-material-kit-pro/pages/pricingSections/featuresStyle';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(featuresStyle);

const OurSubscriptions: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.featuresSection}>
      <div className={classes.textCenter}>
        <h3 className={classes.title}>Nos abonnements</h3>
      </div>
      <GridContainer>
        <GridItem md={4} sm={4} className={classes.mlAuto}>
          <InfoArea
            title="Abonnement Membre Privilège :"
            description="FMR te propose de devenir membre privilège. Cet
            abonnement annuel te permettra de profiter d’avantage sur tous les événements qui
            vont être organisés au cours de l’année. Grâce à cette souscription tu bénéficieras
            d'`un tarif préférentiel sur les boissons, les entrées, le merch’ !
            Des soirée pourront même t’être réservé ! En bref, c’est le bon plan !"
            icon={CardMembership}
            iconColor="info"
          />
        </GridItem>
        <GridItem md={4} sm={4} className={classes.mrAuto}>
          <InfoArea
            title="Abonnement Membre classic :"
            description="Cet abonnement gratuit te permet d’accéder aux
            évènements qui sont organisés. Toutefois, un tarif à l’entrée des soirées peut être
            demandé en fonction de l’événement. Cet abonnement ne te donne pas accès aux
            réductions de tarif des l’espace merch ainsi que les réductions effectué au bars."
            icon={CardGiftCard}
            iconColor="success"
          />
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default OurSubscriptions;
