import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from 'components/lib/Grid/GridContainer.js';
import GridItem from 'components/lib/Grid/GridItem.js';
import Card from 'components/lib/Card/Card.js';
import CardBody from 'components/lib/Card/CardBody.js';
import CardHeader from 'components/lib/Card/CardHeader.js';
import Muted from 'components/lib/Typography/Muted.js';

import profilePageStyle from 'styles/jss/nextjs-material-kit-pro/pages/profilePageStyle.js';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(profilePageStyle);

const ResumeStep: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={5} className={classes.gridItem}>
          <Card profile plain className={classes.card}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={5}>
                <CardHeader image plain>
                  <a href="#pablo">
                    <img src="/img/faces/avatar.jpg" alt="..." />
                  </a>
                  <div
                    style={{
                      backgroundImage: "url('/img/faces/avatar.jpg')",
                      opacity: '1',
                    }}
                  />
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
                  <a href="#pablo">
                    <img src="/img/faces/marc.jpg" alt="..." />
                  </a>
                  <div
                    style={{
                      backgroundImage: "url('/img/faces/marc.jpg')",
                      opacity: '1',
                    }}
                  />
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
        <GridItem xs={12} sm={12} md={5} className={classes.gridItem}>
          <Card profile plain className={classes.card}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={5}>
                <CardHeader image plain>
                  <a href="#pablo">
                    <img src="/img/faces/kendall.jpg" alt="..." />
                  </a>
                  <div
                    style={{
                      backgroundImage: "url('/img/faces/kendall.jpg')",
                      opacity: '1',
                    }}
                  />
                </CardHeader>
              </GridItem>
              <GridItem xs={12} sm={12} md={7}>
                <CardBody plain>
                  <h4 className={classes.cardTitle}>Kendall Jenner</h4>
                  <Muted>
                    <h6>MODEL</h6>
                  </Muted>
                  <p className={classes.description}>
                    I love you like Kanye loves Kanye. Don
                    {"'"}t be scared of the truth.
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
                  <a href="#pablo">
                    <img src="/img/faces/card-profile2-square.jpg" alt="..." />
                  </a>
                  <div
                    style={{
                      backgroundImage: "url('/img/faces/card-profile2-square.jpg')",
                      opacity: '1',
                    }}
                  />
                </CardHeader>
              </GridItem>
              <GridItem xs={12} sm={12} md={7}>
                <CardBody plain>
                  <h4 className={classes.cardTitle}>George West</h4>
                  <Muted>
                    <h6>MODEL/DJ</h6>
                  </Muted>
                  <p className={classes.description}>I love you like Kanye loves Kanye.</p>
                </CardBody>
              </GridItem>
            </GridContainer>
          </Card>
        </GridItem>
      </GridContainer>
    </>
  );
};
export default ResumeStep;
