import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from 'components/Header/Header.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import GridContainer from 'components/lib/Grid/GridContainer.js';
import GridItem from 'components/lib/Grid/GridItem.js';
import Parallax from 'components/lib/Parallax/Parallax.js';
import SectionImage from 'pages-sections/blog-posts/SectionImage.js';
import SectionBlogs from 'pages-sections/sections-page/SectionBlogs.js';

import blogPostsPageStyle from 'styles/jss/nextjs-material-kit-pro/pages/blogPostsPageStyle.js';

const useStyles = makeStyles(blogPostsPageStyle);

const BlogPosts: React.FC = () => {
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
          <SectionBlogs id="blogs" />
        </div>
        <SectionImage />
      </div>
    </div>
  );
};
export default BlogPosts;
