import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// core components
import GridContainer from 'components/lib/Grid/GridContainer.js';
import GridItem from 'components/lib/Grid/GridItem.js';
import Card from 'components/lib/Card/Card.js';
import CardBody from 'components/lib/Card/CardBody.js';
import CardFooter from 'components/lib/Card/CardFooter.js';
import Button from 'components/lib/CustomButtons/Button';

import pricingStyle from 'styles/jss/nextjs-material-kit-pro/pages/sectionsSections/pricingStyle.js';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(pricingStyle);

const TicketCards: React.FC = ({ ...rest }) => {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      {/* Pricing 2 START */}
      <div className={classes.pricing}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={6}
              md={6}
              className={classes.mlAuto + ' ' + classes.mrAuto + ' ' + classes.textCenter}>
              <h2 className={classes.title}>Achète ton ticket d&apos;entré</h2>
              <div className={classes.sectionSpace} />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <Card pricing plain>
                <CardBody pricing plain>
                  <h6 className={classes.cardCategory}>FREE</h6>
                  <h1 className={classes.cardTitle}>
                    <small>$</small> 0 <small>/mo</small>
                  </h1>
                  <ul>
                    <li>
                      <b>1</b> Project
                    </li>
                    <li>
                      <b>5</b> Team Members
                    </li>
                    <li>
                      <b>55</b> Personal Contacts
                    </li>
                    <li>
                      <b>5.000</b> Messages
                    </li>
                  </ul>
                </CardBody>
                <CardFooter pricing className={classes.justifyContentCenter}>
                  <Button color="rose" round>
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card
                pricing
                raised
                background
                style={{
                  backgroundImage: "url('/img/examples/card-blog3.jpg')",
                }}>
                <CardBody pricing background>
                  <h6 className={classes.cardCategoryWhite}>PREMIUM</h6>
                  <h1 className={classes.cardTitleWhite}>
                    <small>$</small> 89 <small>/mo</small>
                  </h1>
                  <ul>
                    <li>
                      <b>500</b> Projects
                    </li>
                    <li>
                      <b>50</b> Team Members
                    </li>
                    <li>
                      <b>125</b> Personal Contacts
                    </li>
                    <li>
                      <b>15.000</b> Messages
                    </li>
                  </ul>
                </CardBody>
                <CardFooter pricing className={classes.justifyContentCenter}>
                  <Button color="white" round>
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card pricing plain>
                <CardBody pricing plain>
                  <h6 className={classes.cardCategory}>PLATINUM</h6>
                  <h1 className={classes.cardTitle}>
                    <small>$</small> 199 <small>/mo</small>
                  </h1>
                  <ul>
                    <li>
                      <b>1000</b> Projects
                    </li>
                    <li>
                      <b>100</b> Team Members
                    </li>
                    <li>
                      <b>550</b> Personal Contacts
                    </li>
                    <li>
                      <b>50.000</b> Messages
                    </li>
                  </ul>
                </CardBody>
                <CardFooter pricing className={classes.justifyContentCenter}>
                  <Button color="rose" round>
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
};

export default TicketCards;
