import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Mail from '@material-ui/icons/Mail';
// core components
import Header from 'components/Header/Header.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import GridContainer from 'components/lib/Grid/GridContainer.js';
import GridItem from 'components/lib/Grid/GridItem.js';
import Parallax from 'components/lib/Parallax/Parallax.js';
import Button from '../lib/CustomButtons/Button';
import Card from 'components/lib/Card/Card.js';
import CardBody from 'components/lib/Card/CardBody.js';
import CustomInput from 'components/lib/CustomInput/CustomInput.js';
// sections for this page
import SectionLatestOffers from 'pages-sections/ecommerce/SectionLatestOffers.js';
import SectionBlog from 'pages-sections/ecommerce/SectionBlog.js';

import styles from 'styles/jss/nextjs-material-kit-pro/pages/ecommerceStyle.js';

const useStyles = makeStyles(styles);

const Shop: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="Accueil Fmr"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: 'info',
        }}
      />
      <Parallax image="/img/examples/clark-street-merc.jpg" filter="dark" small>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              md={8}
              sm={8}
              className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}>
              <div className={classes.brand}>
                <h1 className={classes.title}>Ecommerce Page!</h1>
                <h4>
                  Free global delivery for all products. Use coupon <b>25summer</b> for an extra 25%
                  Off
                </h4>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionLatestOffers />
      </div>
      <SectionBlog />
      <div
        className={classNames(classes.subscribeLine, classes.subscribeLineImage)}
        style={{ backgroundImage: "url('/img/examples/ecommerce-header.jpg')" }}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6} className={classNames(classes.mlAuto, classes.mrAuto)}>
              <div className={classes.textCenter}>
                <h3 className={classes.title}>Subscribe to our Newsletter</h3>
                <p className={classes.description}>
                  Join our newsletter and get news in your inbox every week! We hate spam too, so no
                  worries about this.
                </p>
              </div>
              <Card raised className={classes.card}>
                <CardBody className={classes.cardBody}>
                  <form>
                    <GridContainer>
                      <GridItem xs={12} sm={6} md={6} lg={8}>
                        <CustomInput
                          id="emailPreFooter"
                          formControlProps={{
                            fullWidth: true,
                            className: classes.cardForm,
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Mail />
                              </InputAdornment>
                            ),
                            placeholder: 'Your Email...',
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={6} md={6} lg={4}>
                        <Button color="rose" block className={classes.subscribeButton}>
                          subscribe
                        </Button>
                      </GridItem>
                    </GridContainer>
                  </form>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
};
export default Shop;
