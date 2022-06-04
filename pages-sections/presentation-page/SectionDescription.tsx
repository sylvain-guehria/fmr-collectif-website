import React from 'react';
// core components
import GridContainer from 'components/lib/Grid/GridContainer';
import GridItem from 'components/lib/Grid/GridItem';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

import descriptionStyle from 'styles/jss/nextjs-material-kit-pro/pages/presentationSections/descriptionStyle';
import CitationsDescription from 'components/HomePage/CitationsDescription';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(descriptionStyle);

const SectionDescription: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem md={8} sm={8}>
            <h4 className={classes.description} style={{ textAlign: 'left' }}>
              Depuis 2019, FMR parcourt la région pour partager avec vous des événements exclusifs
              dans des lieux incroyables.
              <br />
              <br />
              L’Objectif ? Proposer un concept inédit de soirée sur le bassin chambérien avec des
              évènements tout au long de l’année dans des lieux différents.
            </h4>
          </GridItem>
        </GridContainer>
        <div className={classes.features}>
          <CitationsDescription />
        </div>
      </div>
    </div>
  );
};

export default SectionDescription;
