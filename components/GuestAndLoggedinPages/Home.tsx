import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// core components
import Header from 'components/Header/Header.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import Parallax from 'components/lib/Parallax/Parallax.js';
import GridContainer from 'components/lib/Grid/GridContainer.js';
import GridItem from 'components/lib/Grid/GridItem.js';
// sections for this page
import SectionDescription from 'pages-sections/presentation-page/SectionDescription.js';
import SectionComponents from 'pages-sections/presentation-page/SectionComponents.js';
import SectionCards from 'pages-sections/presentation-page/SectionCards.js';
import SectionContent from 'pages-sections/presentation-page/SectionContent.js';
import SectionSections from 'pages-sections/presentation-page/SectionSections.js';
import SectionExamples from 'pages-sections/presentation-page/SectionExamples.js';
import SectionFreeDemo from 'pages-sections/presentation-page/SectionFreeDemo.js';
import SectionOverview from 'pages-sections/presentation-page/SectionOverview.js';
import SectionPricing from 'pages-sections/presentation-page/SectionPricing.js';

import presentationStyle from 'styles/jss/nextjs-material-kit-pro/pages/presentationStyle.js';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(presentationStyle);

const Home: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="Accueil Fmr"
        links={<HeaderLinks dropdownHoverColor="light" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: 'light',
        }}
      />
      <Parallax
        image="https://images.unsplash.com/photo-1603397600992-a9734a72b69c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
        className={classes.parallax}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <Image src="/img/fmr-logo.webp" alt="fmr logo" width={225} height={178} />
                {/* <span className={classes.proBadge}>Collectif</span> */}
                <h3 className={classes.title}>Organisateur de soirée et d&apos;évènement.</h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionDescription />
        <SectionComponents />
        <SectionCards />
        <SectionContent />
        <SectionSections />
        <SectionExamples />
        <SectionFreeDemo />
        <SectionOverview />
      </div>
      <SectionPricing />
    </div>
  );
};
export default Home;
