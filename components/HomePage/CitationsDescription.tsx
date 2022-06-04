import React from 'react';
// core components
import GridContainer from 'components/lib/Grid/GridContainer';
import GridItem from 'components/lib/Grid/GridItem';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

import overviewStyle from 'styles/jss/nextjs-material-kit-pro/pages/presentationSections/overviewStyle';
import Citation from './Citation';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(overviewStyle);

const CitationsDescription: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <div className={classes.sectionTestimonials}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem md={6} sm={4}>
              <Citation
                url="/img/home/charles-dullin.jpg"
                citation="On fait son public comme on fait sa troupe."
              />
            </GridItem>
            <GridItem md={6} sm={4}>
              <Citation
                url="/img/home/andre-malraux.jpg"
                citation="La culture ce qui a fait de l’homme autre chose qu’un accident de la
                nature"
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
};

export default CitationsDescription;
