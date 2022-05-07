import React from 'react';
import classNames from 'classnames';
import GridContainer from 'components/lib/Grid/GridContainer';
import GridItem from 'components/lib/Grid/GridItem';
import Card from 'components/lib/Card/Card';
import CardAvatar from 'components/lib/Card/CardAvatar';
import CardBody from 'components/lib/Card/CardBody';
import CardFooter from 'components/lib/Card/CardFooter';
import { makeStyles } from '@material-ui/core/styles';
import Favorite from '@mui/icons-material/Favorite';

import teamStyle from 'styles/jss/nextjs-material-kit-pro/pages/aboutUsSections/teamStyle';
import SocialMediaIconLinks, { SocialMedia } from 'components/SocialMedia/SocialMediaIconLinks';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(teamStyle);

const OurTeam: React.FC = () => {
  const classes = useStyles();
  const socialMediasSylvain: SocialMedia[] = [
    {
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/sylvain-guehria-ab9737134/',
      color: 'linkedin',
    },
    {
      name: 'github',
      link: 'https://github.com/sylvain-guehria',
      color: 'github',
    },
  ];
  const socialMediasTiti: SocialMedia[] = [
    {
      name: 'linkedin',
      link: '',
      color: 'linkedin',
    },
    {
      name: 'facebook',
      link: '',
      color: 'facebook',
    },
  ];
  return (
    <div className={classes.team}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto, classes.textCenter)}>
          <h2 className={classes.title}>Votre staff</h2>
          <h5 className={classes.description}>
            Vous retrouverez cette équipe à chaque évènements, n&apos;hésitez pas à venir nous voir
            que ce soit pour une demande ou juste pour boire un verre
            <Favorite color={'error'} style={{ paddingTop: '10px' }} />
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={3} sm={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="#pablo">
                <img src="/img/faces/marc.jpg" alt="profile-pic" className={classes.img} />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Thbaut Gervasoni</h4>
              <h6 className={classes.textMuted}>CEO</h6>
              <p className={classes.cardDescription}>Blablabla.</p>
            </CardBody>
            <CardFooter className={classes.justifyContent}>
              <SocialMediaIconLinks socialMedias={socialMediasTiti} />
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem md={3} sm={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="#pablo">
                <img src="/img/faces/kendall.jpg" alt="profile-pic" className={classes.img} />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Joris Sandon</h4>
              <h6 className={classes.textMuted}>???</h6>
              <p className={classes.cardDescription}>blablabla.</p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem md={3} sm={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="#pablo">
                <img src="/img/faces/christian.jpg" alt="profile-pic" className={classes.img} />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Maud Paviet</h4>
              <h6 className={classes.textMuted}>Trésorière</h6>
              <p className={classes.cardDescription}>blablabla</p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem md={3} sm={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="#pablo">
                <img src="/img/faces/avatar.jpg" alt="profile-pic" className={classes.img} />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Sylvain Guehria</h4>
              <h6 className={classes.textMuted}>Software ingénieur</h6>
              <p className={classes.cardDescription}>Blablabla</p>
            </CardBody>
            <CardFooter className={classes.justifyContent}>
              <SocialMediaIconLinks socialMedias={socialMediasSylvain} />
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default OurTeam;
