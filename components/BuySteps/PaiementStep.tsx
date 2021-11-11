import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from 'components/lib/Grid/GridContainer.js';
import GridItem from 'components/lib/Grid/GridItem.js';

import profilePageStyle from 'styles/jss/nextjs-material-kit-pro/pages/profilePageStyle.js';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(profilePageStyle);

const PaiementStep: React.FC = () => {
  const classes = useStyles();
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={3}>
        <img alt="..." src="/img/examples/mariya-georgieva.jpg" className={navImageClasses} />
        <img alt="..." src="/img/examples/clem-onojegaw.jpg" className={navImageClasses} />
      </GridItem>
      <GridItem xs={12} sm={12} md={3}>
        <img alt="..." src="/img/examples/clem-onojeghuo.jpg" className={navImageClasses} />
        <img alt="..." src="/img/examples/olu-eletu.jpg" className={navImageClasses} />
        <img alt="..." src="/img/examples/cynthia-del-rio.jpg" className={navImageClasses} />
      </GridItem>
    </GridContainer>
  );
};
export default PaiementStep;
