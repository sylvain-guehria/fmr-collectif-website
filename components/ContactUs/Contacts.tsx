import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// @mui/icons-material
import PinDrop from '@mui/icons-material/PinDrop';
import Phone from '@mui/icons-material/Phone';
import Check from '@mui/icons-material/Check';
// core components
import GridContainer from 'components/lib/Grid/GridContainer';
import GridItem from 'components/lib/Grid/GridItem';
import InfoArea from 'components/lib/InfoArea/InfoArea';
import Card from 'components/lib/Card/Card';
import CardHeader from 'components/lib/Card/CardHeader';
import CardBody from 'components/lib/Card/CardBody';
import CardFooter from 'components/lib/Card/CardFooter';
import CustomInput from 'components/lib/CustomInput/CustomInput';
import Button from 'components/lib/CustomButtons/Button';

import contactsStyle from 'styles/jss/nextjs-material-kit-pro/pages/sectionsSections/contactsStyle';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(contactsStyle);

const Contacts: React.FC = ({ ...rest }) => {
  const [checked, setChecked] = React.useState([]);
  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      <div
        className={classes.contacts + ' ' + classes.section}
        style={{ backgroundImage: "url('/img/examples/city.jpg')" }}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={5} md={5}>
              <h2 className={classes.title}>Get in Touch</h2>
              <h5 className={classes.description}>
                You need more information? Check what other persons are saying about our product.
                They are very happy with their purchase.
              </h5>
              <InfoArea
                className={classes.infoArea}
                title="Find us at the office"
                description={
                  <span>
                    Bld Mihail Kogalniceanu, nr. 8,
                    <br /> 7652 Bucharest,
                    <br /> Romania
                  </span>
                }
                icon={PinDrop}
              />
              <InfoArea
                className={classes.infoArea}
                title="Give us a ring"
                description={
                  <span>
                    Michael Jordan
                    <br /> +40 762 321 762
                    <br /> Mon - Fri, 8:00-22:00
                  </span>
                }
                icon={Phone}
              />
            </GridItem>
            <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
              <Card className={classes.card1}>
                <form>
                  <CardHeader contact color="primary" className={classes.textCenter}>
                    <h4 className={classes.cardTitle}>Contact Us</h4>
                  </CardHeader>
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={12} sm={6} md={6}>
                        <CustomInput
                          labelText="First Name"
                          id="first"
                          formControlProps={{
                            fullWidth: true,
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={6} md={6}>
                        <CustomInput
                          labelText="Last Name"
                          id="last"
                          formControlProps={{
                            fullWidth: true,
                          }}
                        />
                      </GridItem>
                    </GridContainer>
                    <CustomInput
                      labelText="Email Address"
                      id="email-address"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    <CustomInput
                      labelText="Your Message"
                      id="message"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 5,
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.justifyContentBetween}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          tabIndex={-1}
                          onClick={() => handleToggle(1)}
                          checkedIcon={<Check className={classes.checkedIcon} />}
                          icon={<Check className={classes.uncheckedIcon} />}
                          classes={{
                            checked: classes.checked,
                            root: classes.checkRoot,
                          }}
                        />
                      }
                      classes={{ label: classes.label }}
                      label="I'm not a robot"
                    />
                    <Button color="primary" className={classes.pullRight}>
                      Send Message
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
