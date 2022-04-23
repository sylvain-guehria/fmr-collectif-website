import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// core components
import GridContainer from 'components/lib/Grid/GridContainer';
import GridItem from 'components/lib/Grid/GridItem';
import Card from 'components/lib/Card/Card';
import CardAvatar from 'components/lib/Card/CardAvatar';
import CardBody from 'components/lib/Card/CardBody';
import CardFooter from 'components/lib/Card/CardFooter';
import Button from 'components/lib/CustomButtons/Button';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

import teamStyle from 'styles/jss/nextjs-material-kit-pro/pages/aboutUsSections/teamStyle';

const useStyles = makeStyles(teamStyle);

export default function SectionTeam() {
  const classes = useStyles();
  return (
    <div className={classes.team}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(
            classes.mrAuto,
            classes.mlAuto,
            classes.textCenter
          )}
        >
          <h2 className={classes.title}>We are nerd rockstars</h2>
          <h5 className={classes.description}>
            This is the paragraph where you can write more details about your
            team. Keep you user engaged by providing meaningful information.
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={3} sm={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="#pablo">
                <img
                  src="/img/faces/marc.jpg"
                  alt="profile-pic"
                  className={classes.img}
                />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Thbaut Gervasoni</h4>
              <h6 className={classes.textMuted}>CEO</h6>
              <p className={classes.cardDescription}>
                Blablabla.
              </p>
            </CardBody>
            <CardFooter className={classes.justifyContent}>
              <Button href="#pablo" justIcon simple color="twitter">
                <i className="fab fa-twitter" />
              </Button>
              <Button href="#pablo" justIcon simple color="facebook">
                <i className="fab fa-facebook" />
              </Button>
              <Button href="#pablo" justIcon simple color="google">
                <i className="fab fa-google" />
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem md={3} sm={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="#pablo">
                <img
                  src="/img/faces/kendall.jpg"
                  alt="profile-pic"
                  className={classes.img}
                />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Joris Sandon</h4>
              <h6 className={classes.textMuted}>???</h6>
              <p className={classes.cardDescription}>
               blablabla.
              </p>
            </CardBody>
            <CardFooter className={classes.justifyContent}>
              <Button href="#pablo" justIcon simple color="twitter">
                <i className="fab fa-twitter" />
              </Button>
              <Button href="#pablo" justIcon simple color="dribbble">
                <i className="fab fa-dribbble" />
              </Button>
              <Button href="#pablo" justIcon simple color="linkedin">
                <i className="fab fa-linkedin-in" />
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem md={3} sm={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="#pablo">
                <img
                  src="/img/faces/christian.jpg"
                  alt="profile-pic"
                  className={classes.img}
                />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Maud Paviet</h4>
              <h6 className={classes.textMuted}>Trésorière</h6>
              <p className={classes.cardDescription}>
                blablabla
              </p>
            </CardBody>
            <CardFooter className={classes.justifyContent}>
              <Button href="#pablo" justIcon simple color="facebook">
                <i className="fab fa-facebook" />
              </Button>
              <Button href="#pablo" justIcon simple color="dribbble">
                <i className="fab fa-dribbble" />
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem md={3} sm={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="#pablo">
                <img
                  src="/img/faces/avatar.jpg"
                  alt="profile-pic"
                  className={classes.img}
                />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Sylvain Guehria</h4>
              <h6 className={classes.textMuted}>Software ingénieur</h6>
              <p className={classes.cardDescription}>
                Blablabla
              </p>
            </CardBody>
            <CardFooter className={classes.justifyContent}>
              <Button href="#pablo" justIcon simple color="google">
                <i className="fab fa-google" />
              </Button>
              <Button href="#pablo" justIcon simple color="twitter">
                <i className="fab fa-twitter" />
              </Button>
              <Button href="#pablo" justIcon simple color="dribbble">
                <i className="fab fa-dribbble" />
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
