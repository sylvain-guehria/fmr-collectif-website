import React from 'react';
// nodejs library to set properties for components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
import FormatAlignLeft from '@material-ui/icons/FormatAlignLeft';
// core components
import Header from 'components/Header/Header.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import Parallax from 'components/lib/Parallax/Parallax.js';
import GridContainer from 'components/lib/Grid/GridContainer.js';
import GridItem from 'components/lib/Grid/GridItem.js';
import Button from '../lib/CustomButtons/Button';
// sections for this page
import SectionText from 'pages-sections/blog-post/SectionText.js';
import SectionBlogInfo from 'pages-sections/blog-post/SectionBlogInfo.js';
import SectionComments from 'pages-sections/blog-post/SectionComments.js';
import SectionSimilarStories from 'pages-sections/blog-post/SectionSimilarStories.js';

import blogPostPageStyle from 'styles/jss/nextjs-material-kit-pro/pages/blogPostPageStyle.js';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(blogPostPageStyle);

const Event: React.FC = () => {
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
      <Parallax image="/img/bg5.jpg" filter="dark">
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem md={8} className={classes.textCenter}>
              <h1 className={classes.title}>How We Built the Most Successful Castle Ever</h1>
              <h4 className={classes.subtitle}>
                The last 48 hours of my life were total madness. This is what I did.
              </h4>
              <br />
              <Button color="rose" size="lg" round>
                <>
                  <FormatAlignLeft /> Read Article
                </>
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes.main}>
        <div className={classes.container}>
          <SectionText />
          <SectionBlogInfo />
          <SectionComments />
        </div>
      </div>
      <SectionSimilarStories />
    </div>
  );
};
export default Event;
