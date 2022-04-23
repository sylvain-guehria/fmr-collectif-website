import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
// @mui/icons-material
import Add from '@mui/icons-material/Add';
// core components
import Header from 'components/Header/Header';
import GridContainer from 'components/lib/Grid/GridContainer';
import GridItem from 'components/lib/Grid/GridItem';
import HeaderLinks from 'components/Header/HeaderLinks';
import Parallax from 'components/lib/Parallax/Parallax';
import Clearfix from 'components/lib/Clearfix/Clearfix';
import Button from '../lib/CustomButtons/Button';

import profilePageStyle from 'styles/jss/nextjs-material-kit-pro/pages/profilePageStyle';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(profilePageStyle);

const Profile: React.FC = ({ ...rest }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  const imageClasses = classNames(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);
  return (
    <div>
      <Header
        color="transparent"
        brand="Accueil Fmr"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: 'info',
        }}
        {...rest}
      />
      <Parallax image="/img/examples/city.jpg" filter="dark" className={classes.parallax} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div>
                  <img src="/img/faces/christian.jpg" alt="..." className={imageClasses} />
                </div>
                <div className={classes.name}>
                  <h3 className={classes.title}>Christian Louboutin</h3>
                  <h6>DESIGNER</h6>
                  <Button justIcon simple color="dribbble">
                    <i className={' fab fa-dribbble'} />
                  </Button>
                  <Button justIcon simple color="twitter">
                    <i className={' fab fa-twitter'} />
                  </Button>
                  <Button justIcon simple color="pinterest">
                    <i className={' fab fa-pinterest'} />
                  </Button>
                </div>
              </div>
              <div className={classes.follow}>
                <Tooltip
                  id="tooltip-top"
                  title="Follow this user"
                  placement="top"
                  classes={{ tooltip: classes.tooltip }}>
                  <Button justIcon round color="primary" className={classes.followButton}>
                    <Add className={classes.followIcon} />
                  </Button>
                </Tooltip>
              </div>
            </GridItem>
          </GridContainer>
          <div className={classNames(classes.description, classes.textCenter)}>
            <p>
              An artist of considerable range, Chet Faker — the name taken by Melbourne-raised,
              Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving
              it a warm, intimate feel with a solid groove structure.{' '}
            </p>
          </div>
          <Clearfix />
        </div>
      </div>
    </div>
  );
};

export default Profile;
