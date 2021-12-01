import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from 'components/lib/Grid/GridContainer.js';
import GridItem from 'components/lib/Grid/GridItem.js';
import Card from 'components/lib/Card/Card.js';
import CardBody from 'components/lib/Card/CardBody.js';
import CardHeader from 'components/lib/Card/CardHeader.js';
import Muted from 'components/lib/Typography/Muted.js';
import { BuyFormType } from './BuySteps';

import profilePageStyle from 'styles/jss/nextjs-material-kit-pro/pages/profilePageStyle.js';
import ShoppingCartTable from 'components/ShoppingCart/ShoppingCartTable';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(profilePageStyle);

type Props = {
  shippingData: BuyFormType;
};

const ResumeStep: React.FC<Props> = ({ shippingData }) => {
  // eslint-disable-next-line no-console
  console.log(shippingData);
  const classes = useStyles();
  return (
    <>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={5} className={classes.gridItem}>
          <Card profile plain className={classes.card}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={5}>
                <CardHeader image plain>
                  <img src="/img/faces/avatar.jpg" alt="..." />
                </CardHeader>
              </GridItem>
              <GridItem xs={12} sm={12} md={7}>
                <CardBody plain>
                  <h4 className={classes.cardTitle}>Gigi Hadid</h4>
                  <Muted>
                    <h6>MODEL</h6>
                  </Muted>
                  <p className={classes.description}>
                    Don{"'"}t be scared of the truth because we need to restart the human foundation
                    in truth...
                  </p>
                </CardBody>
              </GridItem>
            </GridContainer>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={5} className={classes.gridItem}>
          <Card profile plain className={classes.card}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={5}>
                <CardHeader image plain>
                  <img src="/img/faces/marc.jpg" alt="..." />
                </CardHeader>
              </GridItem>
              <GridItem xs={12} sm={12} md={7}>
                <CardBody plain>
                  <h4 className={classes.cardTitle}>Marc Jacobs</h4>
                  <Muted>
                    <h6>DESIGNER</h6>
                  </Muted>
                  <p className={classes.description}>
                    Don{"'"}t be scared of the truth because we need to restart the human foundation
                    in truth...
                  </p>
                </CardBody>
              </GridItem>
            </GridContainer>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <ShoppingCartTable readOnly />
      </GridContainer>
    </>
  );
};
export default ResumeStep;
