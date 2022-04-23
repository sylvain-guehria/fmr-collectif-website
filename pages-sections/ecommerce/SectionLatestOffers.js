import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// core components
import GridContainer from 'components/lib/Grid/GridContainer';
import GridItem from 'components/lib/Grid/GridItem';
import Card from 'components/lib/Card/Card';
import CardHeader from 'components/lib/Card/CardHeader';
import CardBody from 'components/lib/Card/CardBody';
import CardFooter from 'components/lib/Card/CardFooter';
import Button from 'components/lib/CustomButtons/Button';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
// @material-ui icons
import Favorite from '@mui/icons-material/Favorite';
import Link from 'next/link';

import styles from 'styles/jss/nextjs-material-kit-pro/pages/ecommerceSections/latestOffersStyle';

const useStyles = makeStyles(styles);

export default function SectionLatestOffers() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2>Nos t-shirts</h2>
        <GridContainer>
          <GridItem md={4} sm={4}>
            <Card product plain>
            <Link href="/product">
              <CardHeader image plain>
                <a href="#pablo">
                  <img src="/img/examples/tshirt.jpg" alt="..." />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{
                    backgroundImage: "url('/img/examples/tshirt.jpg')",
                    opacity: 1
                  }}
                />
              </CardHeader>
          </Link>
              <CardBody className={classes.textCenter} plain>
                <h4 className={classes.cardTitle}>Gucci</h4>
                <p className={classes.cardDescription}>
                  The structured shoulders and sleek detailing ensure a sharp
                  silhouette. Team it with a silk pocket square and leather
                  loafers.
                </p>
              </CardBody>
              <CardFooter plain>
                <div className={classes.priceContainer}>
                  <span className={classNames(classes.price, classes.priceOld)}>
                    {' '}
                    €1,430
                  </span>
                  <span className={classNames(classes.price, classes.priceNew)}>
                    {' '}
                    €743
                  </span>
                </div>
                <div className={classNames(classes.stats, classes.mlAuto)}>
                  <Tooltip
                    id="tooltip-top"
                    title="Saved to Wishlist"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button justIcon simple color="rose">
                      <Favorite />
                    </Button>
                  </Tooltip>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem md={4} sm={4}>
            <Card product plain>
              <CardHeader image plain>
                <a href="#pablo">
                  <img src="/img/examples/dolce.jpg" alt="..." />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{
                    backgroundImage: "url('/img/examples/dolce.jpg')",
                    opacity: 1
                  }}
                />
              </CardHeader>
              <CardBody className={classes.textCenter} plain>
                <h4 className={classes.cardTitle}>Dolce & Gabbana</h4>
                <p className={classes.cardDescription}>
                  The structured shoulders and sleek detailing ensure a sharp
                  silhouette. Team it with a silk pocket square and leather
                  loafers.
                </p>
              </CardBody>
              <CardFooter plain>
                <div className={classes.priceContainer}>
                  <span className={classNames(classes.price, classes.priceOld)}>
                    {' '}
                    €1,430
                  </span>
                  <span className={classNames(classes.price, classes.priceNew)}>
                    {' '}
                    €743
                  </span>
                </div>
                <div className={classNames(classes.stats, classes.mlAuto)}>
                  <Tooltip
                    id="tooltip-top"
                    title="Saved to Wishlist"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button justIcon simple color="rose">
                      <Favorite />
                    </Button>
                  </Tooltip>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem md={4} sm={4}>
            <Card product plain>
              <CardHeader image plain>
                <a href="#pablo">
                  <img src="/img/examples/tom-ford.jpg" alt="..." />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{
                    backgroundImage: "url('/img/examples/tom-ford.jpg')",
                    opacity: 1
                  }}
                />
              </CardHeader>
              <CardBody className={classes.textCenter} plain>
                <h4 className={classes.cardTitle}>Dolce & Gabbana</h4>
                <p className={classes.cardDescription}>
                  The structured shoulders and sleek detailing ensure a sharp
                  silhouette. Team it with a silk pocket square and leather
                  loafers.
                </p>
              </CardBody>
              <CardFooter plain>
                <div className={classes.priceContainer}>
                  <span className={classNames(classes.price, classes.priceOld)}>
                    {' '}
                    €1,430
                  </span>
                  <span className={classNames(classes.price, classes.priceNew)}>
                    {' '}
                    €743
                  </span>
                </div>
                <div className={classNames(classes.stats, classes.mlAuto)}>
                  <Tooltip
                    id="tooltip-top"
                    title="Saved to Wishlist"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button justIcon simple color="rose">
                      <Favorite />
                    </Button>
                  </Tooltip>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
