import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @mui/icons-material
// core components
import GridContainer from 'components/lib/Grid/GridContainer';
import GridItem from 'components/lib/Grid/GridItem';
import Card from 'components/lib/Card/Card';
import CardHeader from 'components/lib/Card/CardHeader';
import CardBody from 'components/lib/Card/CardBody';
import CardFooter from 'components/lib/Card/CardFooter';
import Muted from 'components/lib/Typography/Muted';
import Button from 'components/lib/CustomButtons/Button';

import sectionImageStyle from 'styles/jss/nextjs-material-kit-pro/pages/blogPostsSections/sectionImageStyle';

const useStyles = makeStyles(sectionImageStyle);

export default function SectionImage() {
  const classes = useStyles();
  return (
    <div
      className={classes.section}
      style={{ backgroundImage: "url('/img/bg10.jpg')" }}
    >
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.textLeft}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href="#pablo">
                      <img
                        src="/img/faces/card-profile1-square.jpg"
                        alt="..."
                      />
                    </a>
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Alec Thompson</h4>
                    <Muted>
                      <h6>AUTHOR OF THE MONTH</h6>
                    </Muted>
                    <p className={classes.description}>
                      Don{"'"}t be scared of the truth because we need to
                      restart the human foundation in truth...
                    </p>
                  </CardBody>
                  <CardFooter profile plain>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-facebook-square" />
                    </Button>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-google" />
                    </Button>
                  </CardFooter>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.textLeft}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href="#pablo">
                      <img
                        src="/img/faces/card-profile4-square.jpg"
                        alt="..."
                      />
                    </a>
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Kendall Andrew</h4>
                    <Muted>
                      <h6>AUTHOR OF THE WEEK</h6>
                    </Muted>
                    <p className={classes.description}>
                      Don{"'"}t be scared of the truth because we need to
                      restart the human foundation in truth...
                    </p>
                  </CardBody>
                  <CardFooter profile plain>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-linkedin-in" />
                    </Button>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-facebook-square" />
                    </Button>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-dribbble" />
                    </Button>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-google" />
                    </Button>
                  </CardFooter>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
