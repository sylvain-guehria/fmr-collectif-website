import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// core components
import GridContainer from 'components/lib/Grid/GridContainer';
import GridItem from 'components/lib/Grid/GridItem';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

import descriptionStyle from 'styles/jss/nextjs-material-kit-pro/pages/aboutUsSections/descriptionStyle';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(descriptionStyle);

const Description: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classNames(classes.aboutDescription, classes.textCenter)}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto, classes.textLeft)}>
          <h4 className={classNames(classes.description, classes.textCenter)}>Notre histoire : </h4>
          <h5 className={classes.description}>
            FMR est une association à but non lucratif (loi du 1er juillet 1901). Enregistrée depuis
            le printemps 2019 au registre officiel des associations, FMR organise des événements
            culturels singuliers tout autour du bassin chambérien. Son principal objectif est de
            surprendre sa communauté en se réinventant à chaque fois dans des lieux différents et
            atypiques. <br /> <br />
            FMR c’est l’histoire de trois gamins de notre belle Savoie, qui sont partis s’aguerrir
            aux quatre coins du monde, puis aux études et au travail. Mais.. on ne quitte pas la
            Savoie aussi facilement, elle finit toujours par nous rattraper. C’est donc à l’aube de
            la trentaine, que nos trois amis se réunissent de nouveau à Chambéry, avec pour objectif
            de fédérer une communauté autour de projets communs. Ils ont l’ambition de créer des
            nouveaux concepts en utilisant les différents projets sur lesquels ils ont déjà
            travaillés au-delà de nos frontières.
          </h5>
        </GridItem>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto, classes.textLeft)}>
          <h4 className={classNames(classes.description, classes.textCenter)}>Nos valeurs: </h4>
          <h5 className={classes.description}>
            <b>La culture</b> représente un des investissements majeurs dans le développement et la
            pérennisation du patrimoine local. Elle constitue des enjeux à la fois politiques,
            économique et social. La culture a toujours été un élément indispensable dans l’esprit
            des chambériennes et des chambériens. <br />
            <b>La bienveillance</b> de notre équipe ainsi que celle de nos membres représentent pour
            nous le fondement de notre identité. Nous avons la chance de partager des moments
            incroyables dans un contexte festif avec une clientèle respectueuse. <br />
            <b>Mettre en avant la région.</b> Nous avons la chance de pouvoir développer notre
            association dans une région dynamique. Notre objectif est de faire découvrir des lieux
            insolites à nos membres à travers un contexte festif. <br />
            <b>Le partage.</b> FMR reste avant tout une aventure humaine et une histoire de quelques
            copain qui voulait fédérer un mouvement autour de projet festif.
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default Description;
