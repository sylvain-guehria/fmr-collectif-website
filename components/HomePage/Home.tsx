import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// core components
import Header from 'components/Header/Header';
import HeaderLinks from 'components/Header/HeaderLinks';
import Parallax from 'components/lib/Parallax/Parallax';
import GridContainer from 'components/lib/Grid/GridContainer';
import GridItem from 'components/lib/Grid/GridItem';
// sections for this page
import SectionDescription from 'pages-sections/presentation-page/SectionDescription';
import SectionCommunaute from 'pages-sections/presentation-page/SectionCommunaute';
// import SectionCards from 'pages-sections/presentation-page/SectionCards';
// import SectionContent from 'pages-sections/presentation-page/SectionContent';
// import SectionSections from 'pages-sections/presentation-page/SectionSections';
// import SectionExamples from 'pages-sections/presentation-page/SectionExamples';
// import SectionFreeDemo from 'pages-sections/presentation-page/SectionFreeDemo';
// import SectionOverview from 'pages-sections/presentation-page/SectionOverview';
// import SectionPricing from 'pages-sections/presentation-page/SectionPricing';

import presentationStyle from 'styles/jss/nextjs-material-kit-pro/pages/presentationStyle';
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
                <h3 className={classes.title}>Organisateur de soirée et d&apos;évènement</h3>
                <h3 className={classes.title}>Friends Make us Real</h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionDescription />
        <SectionCommunaute />
        {/* <SectionCards />
        <SectionContent />
        <SectionSections />
        <SectionExamples />
        <SectionFreeDemo /> */}
        {/* <SectionOverview /> */}
      </div>
      {/* <SectionPricing /> */}
    </div>
  );
};
export default Home;
