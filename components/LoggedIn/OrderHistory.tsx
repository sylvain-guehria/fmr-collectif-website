import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
import Camera from '@material-ui/icons/Camera';
import Palette from '@material-ui/icons/Palette';
import People from '@material-ui/icons/People';
// core components
import GridContainer from 'components/lib/Grid/GridContainer.js';
import GridItem from 'components/lib/Grid/GridItem.js';
import NavPills from 'components/lib/NavPills/NavPills.js';
import Card from 'components/lib/Card/Card.js';
import CardBody from 'components/lib/Card/CardBody.js';
import CardHeader from 'components/lib/Card/CardHeader.js';
import Badge from 'components/lib/Badge/Badge.js';
import Muted from 'components/lib/Typography/Muted.js';
import Clearfix from 'components/lib/Clearfix/Clearfix.js';

import profilePageStyle from 'styles/jss/nextjs-material-kit-pro/pages/profilePageStyle.js';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(profilePageStyle);

const History: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <div className={classes.profileTabs}>
            <NavPills
              alignCenter
              color="primary"
              tabs={[
                {
                  tabButton: 'Work',
                  tabIcon: Palette,
                  tabContent: (
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
                          French luxury footwear and fashion. The footwear has incorporated shiny,
                          red-lacquered soles that have become his signature.
                        </p>
                        <hr />
                        <h4 className={classes.title}>Focus</h4>
                        <Badge color="primary">Footwear</Badge>
                        <Badge color="rose">Luxury</Badge>
                      </GridItem>
                    </GridContainer>
                  ),
                },
                {
                  tabButton: 'Connections',
                  tabIcon: People,
                  tabContent: (
                    <div>
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={5} className={classes.gridItem}>
                          <Card profile plain className={classes.card}>
                            <GridContainer>
                              <GridItem xs={12} sm={12} md={5}>
                                <CardHeader image plain>
                                  <a href="#pablo">
                                    <img src="/img/faces/avatar.jpg" alt="..." />
                                  </a>
                                  <div
                                    style={{
                                      backgroundImage: "url('/img/faces/avatar.jpg')",
                                      opacity: '1',
                                    }}
                                  />
                                </CardHeader>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={7}>
                                <CardBody plain>
                                  <h4 className={classes.cardTitle}>Gigi Hadid</h4>
                                  <Muted>
                                    <h6>MODEL</h6>
                                  </Muted>
                                  <p className={classes.description}>
                                    Don{"'"}t be scared of the truth because we need to restart the
                                    human foundation in truth...
                                  </p>
                                </CardBody>
                              </GridItem>
                            </GridContainer>
                          </Card>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={5} className={classes.gridItem}>
                          <Card profile plain className={classes.card}>
                            <GridContainer>
                              <GridItem xs={12} sm={12} md={5}>
                                <CardHeader image plain>
                                  <a href="#pablo">
                                    <img src="/img/faces/marc.jpg" alt="..." />
                                  </a>
                                  <div
                                    style={{
                                      backgroundImage: "url('/img/faces/marc.jpg')",
                                      opacity: '1',
                                    }}
                                  />
                                </CardHeader>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={7}>
                                <CardBody plain>
                                  <h4 className={classes.cardTitle}>Marc Jacobs</h4>
                                  <Muted>
                                    <h6>DESIGNER</h6>
                                  </Muted>
                                  <p className={classes.description}>
                                    Don{"'"}t be scared of the truth because we need to restart the
                                    human foundation in truth...
                                  </p>
                                </CardBody>
                              </GridItem>
                            </GridContainer>
                          </Card>
                        </GridItem>
                      </GridContainer>
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={5} className={classes.gridItem}>
                          <Card profile plain className={classes.card}>
                            <GridContainer>
                              <GridItem xs={12} sm={12} md={5}>
                                <CardHeader image plain>
                                  <a href="#pablo">
                                    <img src="/img/faces/kendall.jpg" alt="..." />
                                  </a>
                                  <div
                                    style={{
                                      backgroundImage: "url('/img/faces/kendall.jpg')",
                                      opacity: '1',
                                    }}
                                  />
                                </CardHeader>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={7}>
                                <CardBody plain>
                                  <h4 className={classes.cardTitle}>Kendall Jenner</h4>
                                  <Muted>
                                    <h6>MODEL</h6>
                                  </Muted>
                                  <p className={classes.description}>
                                    I love you like Kanye loves Kanye. Don
                                    {"'"}t be scared of the truth.
                                  </p>
                                </CardBody>
                              </GridItem>
                            </GridContainer>
                          </Card>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={5} className={classes.gridItem}>
                          <Card profile plain className={classes.card}>
                            <GridContainer>
                              <GridItem xs={12} sm={12} md={5}>
                                <CardHeader image plain>
                                  <a href="#pablo">
                                    <img src="/img/faces/card-profile2-square.jpg" alt="..." />
                                  </a>
                                  <div
                                    style={{
                                      backgroundImage: "url('/img/faces/card-profile2-square.jpg')",
                                      opacity: '1',
                                    }}
                                  />
                                </CardHeader>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={7}>
                                <CardBody plain>
                                  <h4 className={classes.cardTitle}>George West</h4>
                                  <Muted>
                                    <h6>MODEL/DJ</h6>
                                  </Muted>
                                  <p className={classes.description}>
                                    I love you like Kanye loves Kanye.
                                  </p>
                                </CardBody>
                              </GridItem>
                            </GridContainer>
                          </Card>
                        </GridItem>
                      </GridContainer>
                    </div>
                  ),
                },
                {
                  tabButton: 'Media',
                  tabIcon: Camera,
                  tabContent: (
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={3}>
                        <img
                          alt="..."
                          src="/img/examples/mariya-georgieva.jpg"
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src="/img/examples/clem-onojegaw.jpg"
                          className={navImageClasses}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <img
                          alt="..."
                          src="/img/examples/clem-onojeghuo.jpg"
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src="/img/examples/olu-eletu.jpg"
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src="/img/examples/cynthia-del-rio.jpg"
                          className={navImageClasses}
                        />
                      </GridItem>
                    </GridContainer>
                  ),
                },
              ]}
            />
          </div>
          <Clearfix />
        </div>
      </div>
    </div>
  );
};
export default History;
