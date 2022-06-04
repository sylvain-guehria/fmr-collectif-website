import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Mail from '@mui/icons-material/Mail';
import GridContainer from 'components/lib/Grid/GridContainer';
import GridItem from 'components/lib/Grid/GridItem';
import Button from '../lib/CustomButtons/Button';
import Card from 'components/lib/Card/Card';
import CardBody from 'components/lib/Card/CardBody';
import CustomInput from 'components/lib/CustomInput/CustomInput';

import styles from 'styles/jss/nextjs-material-kit-pro/pages/ecommerceStyle';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(styles);

const Newsletter: React.FC = () => {
  const classes = useStyles();
  return (
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
  );
};
export default Newsletter;
