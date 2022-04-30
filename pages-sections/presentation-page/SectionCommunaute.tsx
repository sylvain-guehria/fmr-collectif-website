import React from 'react';
// core components
import GridContainer from 'components/lib/Grid/GridContainer';
import GridItem from 'components/lib/Grid/GridItem';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

import componentsStyle from 'styles/jss/nextjs-material-kit-pro/pages/presentationSections/componentsStyle';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(componentsStyle);

const SectionCommunaute: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem md={5} lg={5} sm={12} xs={12}>
            <h3 className={classes.title}>La Commu </h3>
            <h6 className={classes.description}>The core elements of your website</h6>
            <h5 className={classes.description}>
              Notre communauté nous suit dans nos aventures depuis maintenant plus de 2 ans. Nous
              sommes à chaque évènement un peu plus nombreux à vouloir nous retrouver sur ces lieux
              insolites. Il n’y à pas d&apos;âge pour faire partie de notre grande famille. Tout le
              monde est le bienvenu !! Si tu as envie de faire la fête ailleurs dans les bars ou
              dans ton salon, viens nous rejoindre pour faire des rencontres et partager des moments
              incroyables.
            </h5>
          </GridItem>
          <GridItem xs={12} sm={12} md={6} lg={6} className={classes.mlAuto}>
            <div className={classes.imageContainer}>
              <img src="/img/home/fmr_1.jpg" alt="macbook" className={classes.componentsMacbook} />
              <img
                src="/img/assets-for-demo/presentationViewSectionComponent/table.jpg"
                alt="macbook"
                className={classes.shoppingCart}
              />
              <img
                src="/img/assets-for-demo/presentationViewSectionComponent/share-btn.png"
                alt="macbook"
                className={classes.shareButton}
              />
              <img
                src="/img/assets-for-demo/presentationViewSectionComponent/coloured-card-with-btn.jpg"
                alt="macbook"
                className={classes.cardImage}
              />
              <img
                src="/img/assets-for-demo/presentationViewSectionComponent/coloured-card.jpg"
                alt="macbook"
                className={classes.twitterImage}
              />
              <img
                src="/img/assets-for-demo/presentationViewSectionComponent/social-row.jpg"
                alt="macbook"
                className={classes.iconsImage}
              />
              <img
                src="/img/assets-for-demo/presentationViewSectionComponent/pin-btn.jpg"
                alt="macbook"
                className={classes.repostImage}
              />
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
};

export default SectionCommunaute;
