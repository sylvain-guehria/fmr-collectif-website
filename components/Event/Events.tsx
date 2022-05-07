import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from 'components/Header/Header';
import HeaderLinks from 'components/Header/HeaderLinks';
import GridContainer from 'components/lib/Grid/GridContainer';
import GridItem from 'components/lib/Grid/GridItem';
import Parallax from 'components/lib/Parallax/Parallax';
import SectionImage from 'pages-sections/blog-posts/SectionImage';
import SectionEvents from '../../pages-sections/sections-page/SectionEvents';

import blogPostsPageStyle from 'styles/jss/nextjs-material-kit-pro/pages/blogPostsPageStyle';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(blogPostsPageStyle);

const Events: React.FC = () => {
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
          height: 400,
          color: 'info',
        }}
      />
      <Parallax image="/img/bg10.jpg" filter="dark" small>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
              <h2 className={classes.title}>
                A Place for Entrepreneurs to Share and Discover New Stories
              </h2>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes.main}>
        <div className={classes.container}>
          <SectionEvents id="events" />
        </div>
        <SectionImage />
      </div>
    </div>
  );
};
export default Events;
