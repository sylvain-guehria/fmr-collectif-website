import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from 'components/lib/Grid/GridContainer';
import GridItem from 'components/lib/Grid/GridItem';
import Card from 'components/lib/Card/Card';
import CardBody from 'components/lib/Card/CardBody';
import CardHeader from 'components/lib/Card/CardHeader';
import Info from 'components/lib/Typography/Info';
import Success from 'components/lib/Typography/Success';
import Button from 'components/lib/CustomButtons/Button';
import Link from 'next/link';

import blogsStyle from 'styles/jss/nextjs-material-kit-pro/pages/sectionsSections/blogsStyle';

const useStyles = makeStyles(blogsStyle);

export default function SectionBlogs({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.blog}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={classes.mlAuto + ' ' + classes.mrAuto}
            >
              <h2 className={classes.title}>Latest events</h2>
              <br />
              <Card plain blog className={classes.card4}>
                <CardHeader image plain>
                  <a href="#pablito" onClick={(e) => e.preventDefault()}>
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
                    <h6 className={classes.cardCategory}>FASHION</h6>
                  </Info>
                  <Link href="/event">

                  <h3 className={classes.cardTitle}>
                      Autodesk looks to future of 3D
                  </h3>
                  </ Link>
                  <h5 className={classes.description}>
                    Don{"'"}t be scared of the truth because we need to restart
                    the human foundation in truth And I love you like Kanye
                    loves Kanye I love Rick Owens’ bed design but the back is
                    too high for the beams and angle of the ceiling I also
                    wanted to point out that it’s the first album to go number 1
                    off of streaming...
                  </h5>
                  <Button round color="primary">
                    Read More
                  </Button>
                </CardBody>
              </Card>
              <Card plain blog className={classes.card4}>
                <CardHeader image plain>
                  <a href="#pablito" onClick={(e) => e.preventDefault()}>
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
                  <Success>
                    <h6 className={classes.cardCategory}>LIFESTYLE</h6>
                  </Success>
                  <h3 className={classes.cardTitle}>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      We will breathe clean air and exercise
                    </a>
                  </h3>
                  <h5 className={classes.description}>
                    Don{"'"}t be scared of the truth because we need to restart
                    the human foundation in truth And I love you like Kanye
                    loves Kanye I love Rick Owens’ bed design but the back is
                    too high for the beams and angle of the ceiling I also
                    wanted to point out that it’s the first album to go number 1
                    off of streaming...
                  </h5>
                  <Button round color="primary">
                    Read More
                  </Button>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
