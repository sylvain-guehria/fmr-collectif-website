import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @mui/icons-material
import TrendingUp from '@mui/icons-material/TrendingUp';
// core components
import GridContainer from 'components/lib/Grid/GridContainer';
import GridItem from 'components/lib/Grid/GridItem';
import Card from 'components/lib/Card/Card';
import CardBody from 'components/lib/Card/CardBody';
import CardHeader from 'components/lib/Card/CardHeader';
import Info from 'components/lib/Typography/Info';
import Success from 'components/lib/Typography/Success';
import Danger from 'components/lib/Typography/Danger';

import sectionInterestedStyle from 'styles/jss/nextjs-material-kit-pro/pages/blogPostsSections/sectionInterestedStyle';

const useStyles = makeStyles(sectionInterestedStyle);

export default function SectionInterested() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h3 className={classes.title + ' ' + classes.textCenter}>
        You may also be interested in
      </h3>
      <br />
      <GridContainer>
        <GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
          <Card plain blog>
            <CardHeader image plain>
              <a href="#pablo">
                <img src="/img/bg5.jpg" alt="..." />
              </a>
              <div
                className={classes.coloredShadow}
                style={{
                  backgroundImage: "url('/img/bg5.jpg')",
                  opacity: '1'
                }}
              />
            </CardHeader>
            <CardBody plain>
              <Info>
                <h6>ENTERPRISE</h6>
              </Info>
              <h4 className={classes.cardTitle}>
                <a href="#pablo">
                  Autodesk looks to future of 3D printing with Project Escher
                </a>
              </h4>
              <p className={classes.description}>
                Like so many organizations these days, Autodesk is a company in
                transition. It was until recently a traditional boxed software
                company selling licenses.
                <a href="#pablo"> Read More </a>
              </p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
          <Card plain blog>
            <CardHeader plain image>
              <a href="#pablo">
                <img src="/img/examples/blog5.jpg" alt="..." />
              </a>
              <div
                className={classes.coloredShadow}
                style={{
                  backgroundImage: "url('/img/examples/blog5.jpg')",
                  opacity: '1'
                }}
              />
            </CardHeader>
            <CardBody plain>
              <Success>
                <h6>STARTUPS</h6>
              </Success>
              <h4 className={classes.cardTitle}>
                <a href="#pablo">
                  Lyft launching cross-platform service this week
                </a>
              </h4>
              <p className={classes.description}>
                Like so many organizations these days, Autodesk is a company in
                transition. It was until recently a traditional boxed software
                company selling licenses.
                <a href="#pablo"> Read More </a>
              </p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
          <Card plain blog>
            <CardHeader plain image>
              <a href="#pablo">
                <img src="/img/examples/blog6.jpg" alt="..." />
              </a>
              <div
                className={classes.coloredShadow}
                style={{
                  backgroundImage: "url('/img/examples/blog6.jpg')",
                  opacity: '1'
                }}
              />
            </CardHeader>
            <CardBody plain>
              <Danger>
                <h6>
                  <TrendingUp /> ENTERPRISE
                </h6>
              </Danger>
              <h4 className={classes.cardTitle}>
                <a href="#pablo">
                  6 insights into the French Fashion landscape
                </a>
              </h4>
              <p className={classes.description}>
                Like so many organizations these days, Autodesk is a company in
                transition. It was until recently a traditional boxed software
                company selling licenses.
                <a href="#pablo"> Read More </a>
              </p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
