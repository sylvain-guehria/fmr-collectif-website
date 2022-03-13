import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// core components
import Header from 'components/Header/Header.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import GridContainer from 'components/lib/Grid/GridContainer.js';
import GridItem from 'components/lib/Grid/GridItem.js';
import Parallax from 'components/lib/Parallax/Parallax.js';
// import SectionLatestOffers from 'pages-sections/ecommerce/SectionLatestOffers.js';
import Favorite from '@mui/icons-material/Favorite';
import ShopItemCard from '../ShopItemCard/ShopItemCard';
import styles from 'styles/jss/nextjs-material-kit-pro/pages/ecommerceStyle.js';
import { Item } from '../../modules/item/itemType';
import ItemEntity from '../../modules/item/ItemEntity';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(styles);

interface Props {
  items: Item[];
}

const Shop: React.FC<Props> = ({ items = [] }) => {
  const itemEntities: ItemEntity[] = Array.from(items, item => new ItemEntity(item));
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
                <h1 className={classes.title}>Nos articles</h1>
                <h4>
                  En achetant nos tshirts, tu aide l&apos;association et tu participe à la creation
                  des futures évenements <Favorite />
                </h4>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <ShopItemCard items={itemEntities} />
      </div>

      {/* when there will be more than tshirt only to sell */}
      {/* <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionLatestOffers />
      </div> */}
    </div>
  );
};
export default Shop;
