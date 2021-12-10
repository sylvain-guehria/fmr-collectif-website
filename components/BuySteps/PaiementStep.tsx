import React from 'react';
// import classNames from 'classnames';
// import { makeStyles } from '@material-ui/core/styles';
import GridContainer from 'components/lib/Grid/GridContainer.js';
// import GridItem from 'components/lib/Grid/GridItem.js';
import StripePaymentForm from '../forms/payment/StripePaymentForm';

// import profilePageStyle from e'styles/jss/nextjs-material-kit-pro/pages/profilePageStyle.js';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// const useStyles = makeStyles(profilePageStyle);

const PaiementStep: React.FC = () => {
  // const classes = useStyles();
  // const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <GridContainer justify="center">
      <StripePaymentForm />
    </GridContainer>
  );
};
export default PaiementStep;
