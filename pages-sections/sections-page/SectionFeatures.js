import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @mui/icons-material
import Chat from '@mui/icons-material/Chat';
import VerifiedUser from '@mui/icons-material/VerifiedUser';
import Fingerprint from '@mui/icons-material/Fingerprint';
import GroupWork from '@mui/icons-material/GroupWork';
import Airplay from '@mui/icons-material/Airplay';
import LocationOn from '@mui/icons-material/LocationOn';
import Extension from '@mui/icons-material/Extension';
import ChildFriendly from '@mui/icons-material/ChildFriendly';
import WatchLater from '@mui/icons-material/WatchLater';
import Code from '@mui/icons-material/Code';
import FormatPaint from '@mui/icons-material/FormatPaint';
import Dashboard from '@mui/icons-material/Dashboard';
import ViewCarousel from '@mui/icons-material/ViewCarousel';
import AccessTime from '@mui/icons-material/AccessTime';
import AttachMoney from '@mui/icons-material/AttachMoney';
// core components
import GridContainer from 'components/lib/Grid/GridContainer';
import GridItem from 'components/lib/Grid/GridItem';
import InfoArea from 'components/lib/InfoArea/InfoArea';

import featuresStyle from 'styles/jss/nextjs-material-kit-pro/pages/sectionsSections/featuresStyle';

const useStyles = makeStyles(featuresStyle);

export default function SectionFeatures({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.container}>
        {/* Feature 1 START */}
        <div className={classes.features1}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={classes.mlAuto + ' ' + classes.mrAuto}
            >
              <h2 className={classes.title}>Why our product is the best</h2>
              <h5 className={classes.description}>
                This is the paragraph where you can write more details about
                your product. Keep you user engaged by providing meaningful
                information. Remember that by this time, the user is curious,
                otherwise he wouldn{"'"}t scroll to get here. Add a button if
                you want the user to see more.
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                vertical
                icon={Chat}
                title="Free Chat"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough"
                iconColor="info"
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                vertical
                icon={VerifiedUser}
                title="Verified Users"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                iconColor="success"
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                vertical
                icon={Fingerprint}
                title="Fingerprint"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                iconColor="danger"
              />
            </GridItem>
          </GridContainer>
        </div>
        {/* Feature 1 END */}
        {/* Feature 2 START */}
        <div className={classes.features2}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={
                classes.mlAuto + ' ' + classes.mrAuto + ' ' + classes.textCenter
              }
            >
              <h2 className={classes.title}>Why our product is the best</h2>
              <h5 className={classes.description}>
                This is the paragraph where you can write more details about
                your product. Keep you user engaged by providing meaningful
                information.
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                icon={GroupWork}
                title="Collaborate"
                description={
                  <span>
                    <p>
                      The moment you use Material Kit, you know you’ve never
                      felt anything like it. With a single use, this powerfull
                      UI Kit lets you do more than ever before.
                    </p>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      Find more...
                    </a>
                  </span>
                }
                iconColor="info"
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                icon={Airplay}
                title="Airplay"
                description={
                  <span>
                    <p>
                      Divide details about your product or agency work into
                      parts. Write a few lines about each one. A paragraph
                      describing a feature will be enough.
                    </p>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      Find more...
                    </a>
                  </span>
                }
                iconColor="danger"
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                icon={LocationOn}
                title="Location Integrated"
                description={
                  <span>
                    <p>
                      Divide details about your product or agency work into
                      parts. Write a few lines about each one. A paragraph
                      describing a feature will be enough.
                    </p>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      Find more...
                    </a>
                  </span>
                }
                iconColor="success"
              />
            </GridItem>
          </GridContainer>
        </div>
        {/* Feature 2 END */}
        {/* Feature 3 START */}
        <div className={classes.features3}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <div className={classes.phoneContainer}>
                <img src="/img/sections/iphone.png" alt="..." />
              </div>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <h2 className={classes.title}>Your life will be much easier</h2>
              <InfoArea
                className={classes.infoArea}
                icon={Extension}
                title="Hundreds of Components"
                description="The moment you use Material Kit, you know you’ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before."
                iconColor="primary"
              />
              <InfoArea
                className={classes.infoArea}
                icon={ChildFriendly}
                title="Easy to Use"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                iconColor="primary"
              />
              <InfoArea
                className={classes.infoArea}
                icon={WatchLater}
                title="Fast Prototyping"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                iconColor="primary"
              />
            </GridItem>
          </GridContainer>
        </div>
        {/* Feature 3 END */}
        {/* Feature 4 START */}
        <div className={classes.features4}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={
                classes.mlAuto + ' ' + classes.mrAuto + ' ' + classes.textCenter
              }
            >
              <h2 className={classes.title}>Your life will be much easier</h2>
              <h5 className={classes.description}>
                This is the paragraph where you can write more details about
                your product. Keep you user engaged by providing meaningful
                information.
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={3} className={classes.mlAuto}>
              <InfoArea
                icon={Code}
                title="For Developers"
                description="The moment you use Material Kit, you know you’ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before."
                iconColor="info"
              />
              <InfoArea
                icon={FormatPaint}
                title="For Designers"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                iconColor="danger"
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={4}>
              <div className={classes.phoneContainer}>
                <img src="/img/sections/iphone2.png" alt="..." />
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={3} className={classes.mrAuto}>
              <InfoArea
                icon={Dashboard}
                title="Material-UI Grid"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                iconColor="primary"
              />
              <InfoArea
                icon={ViewCarousel}
                title="Example Pages Included"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                iconColor="success"
              />
            </GridItem>
          </GridContainer>
        </div>
        {/* Feature 4 END */}
      </div>
      {/* Feature 5 START */}
      <div
        className={classes.features5}
        style={{ backgroundImage: "url('/img/bg9.jpg')" }}
      >
        <GridContainer className={classes.margin0}>
          <GridItem
            xs={12}
            sm={8}
            md={8}
            className={
              classes.mlAuto + ' ' + classes.mrAuto + ' ' + classes.textCenter
            }
          >
            <h2 className={classes.title}>Your life will be much easier</h2>
          </GridItem>
          <div className={classes.container}>
            <GridContainer
              className={classes.gridContainer}
              style={{ margin: '0!important' }}
            >
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={Code}
                  title="For Developers"
                  description={
                    <p>
                      The moment you use Material Kit, you know you’ve never
                      felt anything like it. With a single use, this powerfull
                      UI Kit lets you do more than ever before.
                    </p>
                  }
                  iconColor="info"
                />
              </GridItem>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={FormatPaint}
                  title="For Designers"
                  description={
                    <p>
                      Divide details about your product or agency work into
                      parts. Write a few lines about each one. A paragraph
                      describing a feature will be enough.
                    </p>
                  }
                  iconColor="danger"
                />
              </GridItem>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={Dashboard}
                  title="Material-UI Grid"
                  description={
                    <p>
                      Divide details about your product or agency work into
                      parts. Write a few lines about each one. A paragraph
                      describing a feature will be enough.
                    </p>
                  }
                  iconColor="primary"
                />
              </GridItem>
            </GridContainer>
            <GridContainer
              className={classes.gridContainer}
              style={{ margin: '0!important' }}
            >
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={ViewCarousel}
                  title="Example Pages Included"
                  description={
                    <p>
                      The moment you use Material Kit, you know you’ve never
                      felt anything like it. With a single use, this powerfull
                      UI Kit lets you do more than ever before.
                    </p>
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={AccessTime}
                  title="Save Time"
                  description={
                    <p>
                      The moment you use Material Kit, you know you’ve never
                      felt anything like it. With a single use, this powerfull
                      UI Kit lets you do more than ever before.
                    </p>
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={AttachMoney}
                  title="Save Money"
                  description={
                    <p>
                      The moment you use Material Kit, you know you’ve never
                      felt anything like it. With a single use, this powerfull
                      UI Kit lets you do more than ever before.
                    </p>
                  }
                />
              </GridItem>
            </GridContainer>
          </div>
        </GridContainer>
      </div>
      {/* Feature 5 END */}
    </div>
  );
}
