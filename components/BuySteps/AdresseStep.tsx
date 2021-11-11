import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// core components
import GridContainer from 'components/lib/Grid/GridContainer.js';
import GridItem from 'components/lib/Grid/GridItem.js';
import Card from 'components/lib/Card/Card.js';
import CardBody from 'components/lib/Card/CardBody.js';
import Badge from 'components/lib/Badge/Badge.js';

import profilePageStyle from 'styles/jss/nextjs-material-kit-pro/pages/profilePageStyle.js';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(profilePageStyle);

const AdresseStep: React.FC = () => {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={7} className={classes.gridItem}>
        <h4 className={classes.title}>Latest Collections</h4>
        <GridContainer className={classes.collections}>
          <GridItem xs={12} sm={12} md={6}>
            <Card
              background
              style={{
                backgroundImage: "url('/img/examples/mariya-georgieva.jpg')",
              }}>
              <CardBody background className={classes.cardBody}>
                <Badge color="warning" className={classes.badge}>
                  Spring 2016
                </Badge>
                <a href="#pablo">
                  <h2 className={classes.cardTitleWhite}>Stilleto</h2>
                </a>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card
              background
              style={{
                backgroundImage: "url('/img/examples/clem-onojeghuo.jpg')",
              }}>
              <CardBody background className={classes.cardBody}>
                <Badge color="info" className={classes.badge}>
                  Spring 2016
                </Badge>
                <a href="#pablo">
                  <h2 className={classes.cardTitleWhite}>High Heels</h2>
                </a>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card
              background
              style={{
                backgroundImage: "url('/img/examples/olu-eletu.jpg')",
              }}>
              <CardBody background className={classes.cardBody}>
                <Badge color="danger" className={classes.badge}>
                  Summer 2016
                </Badge>
                <a href="#pablo">
                  <h2 className={classes.cardTitleWhite}>Flats</h2>
                </a>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card
              background
              style={{
                backgroundImage: "url('/img/examples/darren-coleshill.jpg')",
              }}>
              <CardBody background className={classes.cardBody}>
                <Badge color="success" className={classes.badge}>
                  Winter 2016
                </Badge>
                <a href="#pablo">
                  <h2 className={classes.cardTitleWhite}>Men{"'"}s Sneakers</h2>
                </a>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </GridItem>
      <GridItem xs={12} sm={12} md={2} className={classes.gridItem}>
        <h4 className={classes.title}>Stats</h4>
        <ul className={classes.listUnstyled}>
          <li>
            <b>60</b> Products
          </li>
          <li>
            <b>4</b> Collections
          </li>
          <li>
            <b>331</b> Influencers
          </li>
          <li>
            <b>1.2K</b> Likes
          </li>
        </ul>
        <hr />
        <h4 className={classes.title}>About this work</h4>
        <p className={classes.description}>
          French luxury footwear and fashion. The footwear has incorporated shiny, red-lacquered
          soles that have become his signature.
        </p>
        <hr />
        <h4 className={classes.title}>Focus</h4>
        <Badge color="primary">Footwear</Badge>
        <Badge color="rose">Luxury</Badge>
      </GridItem>
    </GridContainer>
  );
};
export default AdresseStep;
