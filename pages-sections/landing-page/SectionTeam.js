import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @mui/icons-material
// import  from "@mui/icons-material/";
// core components
import GridContainer from 'components/lib/Grid/GridContainer';
import GridItem from 'components/lib/Grid/GridItem';
import Card from 'components/lib/Card/Card';
import CardHeader from 'components/lib/Card/CardHeader';
import CardBody from 'components/lib/Card/CardBody';
import CardFooter from 'components/lib/Card/CardFooter';
import Muted from 'components/lib/Typography/Muted';
import Button from 'components/lib/CustomButtons/Button';

import teamsStyle from 'styles/jss/nextjs-material-kit-pro/pages/sectionsSections/teamsStyle';
import teamStyle from 'styles/jss/nextjs-material-kit-pro/pages/landingPageSections/teamStyle';

const style = {
  ...teamsStyle,
  ...teamStyle,
  justifyContentCenter: {
    justifyContent: 'center'
  }
};

const useStyles = makeStyles(style);

export default function SectionTeam() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here is our team</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.card3}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        src="/img/faces/card-profile1-square.jpg"
                        alt="..."
                      />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage:
                          "url('/img/faces/card-profile1-square.jpg')",
                        opacity: '1'
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Alec Thompson</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>FOUNDER</h6>
                    </Muted>
                    <p className={classes.description}>
                      Don{"'"}t be scared of the truth because we need to
                      restart the human foundation in truth...
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentCenter}>
                    <Button justIcon simple color="twitter">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button justIcon simple color="facebook">
                      <i className="fab fa-facebook-square" />
                    </Button>
                    <Button justIcon simple color="google">
                      <i className="fab fa-google" />
                    </Button>
                  </CardFooter>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.card3}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        src="/img/faces/card-profile6-square.jpg"
                        alt="..."
                      />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage:
                          "url('/img/faces/card-profile6-square.jpg')",
                        opacity: '1'
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Kendall Andrew</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>GRAPHIC DESIGNER</h6>
                    </Muted>
                    <p className={classes.description}>
                      Don{"'"}t be scared of the truth because we need to
                      restart the human foundation in truth...
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentCenter}>
                    <Button justIcon simple color="linkedin">
                      <i className="fab fa-linkedin-in" />
                    </Button>
                    <Button justIcon simple color="facebook">
                      <i className="fab fa-facebook-square" />
                    </Button>
                    <Button justIcon simple color="dribbble">
                      <i className="fab fa-dribbble" />
                    </Button>
                    <Button justIcon simple color="google">
                      <i className="fab fa-google" />
                    </Button>
                  </CardFooter>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.card3}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        src="/img/faces/card-profile4-square.jpg"
                        alt="..."
                      />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage:
                          "url('/img/faces/card-profile4-square.jpg')",
                        opacity: '1'
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Gina Andrew</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>WEB DESIGNER</h6>
                    </Muted>
                    <p className={classes.description}>
                      I love you like Kanye loves Kanye. Don{"'"}t be scared of
                      the truth.
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentCenter}>
                    <Button justIcon simple color="youtube">
                      <i className="fab fa-youtube" />
                    </Button>
                    <Button justIcon simple color="twitter">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button justIcon simple color="instagram">
                      <i className="fab fa-instagram" />
                    </Button>
                  </CardFooter>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.card3}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        src="/img/faces/card-profile2-square.jpg"
                        alt="..."
                      />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage:
                          "url('/img/faces/card-profile2-square.jpg')",
                        opacity: '1'
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>George West</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>BACKEND HACKER</h6>
                    </Muted>
                    <p className={classes.description}>
                      I love you like Kanye loves Kanye. Don{"'"}t be scared of
                      the truth.
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentCenter}>
                    <Button justIcon simple color="linkedin">
                      <i className="fab fa-linkedin-in" />
                    </Button>
                    <Button justIcon simple color="facebook">
                      <i className="fab fa-facebook-square" />
                    </Button>
                    <Button justIcon simple color="google">
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
