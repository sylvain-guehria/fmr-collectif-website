/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from 'components/lib/Grid/GridContainer.js';
import GridItem from 'components/lib/Grid/GridItem.js';
import Button from '../lib/CustomButtons/Button';
import ImageGallery from 'react-image-gallery';
import Accordion from 'components/lib/Accordion/Accordion.js';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

// react component used to create nice image meadia player
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import productStyle from 'styles/jss/nextjs-material-kit-pro/pages/productStyle.js';

const useStyles = makeStyles(productStyle);
const images = [
  {
    original: '/img/examples/product3.jpg',
    thumbnail: '/img/examples/product3.jpg',
  },
  {
    original: '/img/examples/product4.jpg',
    thumbnail: '/img/examples/product4.jpg',
  },
  {
    original: '/img/examples/product1.jpg',
    thumbnail: '/img/examples/product1.jpg',
  },
  {
    original: '/img/examples/product2.jpg',
    thumbnail: '/img/examples/product2.jpg',
  },
];

type Props = {
  product: unknown;
};

const Product: React.FC<Props> = ({ product }) => {
  const classes = useStyles();
  const [colorSelect, setColorSelect] = React.useState('0');
  const [sizeSelect, setSizeSelect] = React.useState('0');

  // eslint-disable-next-line no-console
  console.log(product);

  return (
    <div className={classes.productPage}>
      <div className={classNames(classes.section, classes.sectionGray)}>
        <div className={classes.container}>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <GridContainer>
              <GridItem md={6} sm={6}>
                <ImageGallery
                  showFullscreenButton={false}
                  showPlayButton={false}
                  startIndex={3}
                  items={images}
                  showThumbnails={true}
                  renderLeftNav={(onClick, disabled) => {
                    return (
                      <button
                        className="image-gallery-left-nav"
                        disabled={disabled}
                        onClick={onClick}
                      />
                    );
                  }}
                  renderRightNav={(onClick, disabled) => {
                    return (
                      <button
                        className="image-gallery-right-nav"
                        disabled={disabled}
                        onClick={onClick}
                      />
                    );
                  }}
                />
              </GridItem>
              <GridItem md={6} sm={6}>
                <h2 className={classes.title}>Becky Silk Blazer</h2>
                <h3 className={classes.mainPrice}>$335</h3>
                <Accordion
                  active={0}
                  activeColor="rose"
                  collapses={[
                    {
                      title: 'Description',
                      content: (
                        <p>
                          Eres{"'"} daring {"'"}Grigri Fortune{"'"} swimsuit has the fit and
                          coverage of a bikini in a one-piece silhouette. This fuchsia style is
                          crafted from the label{"'"}s sculpting peau douce fabric and has
                          flattering cutouts through the torso and back. Wear yours with mirrored
                          sunglasses on vacation.
                        </p>
                      ),
                    },
                    {
                      title: 'Designer Information',
                      content: (
                        <p>
                          An infusion of West Coast cool and New York attitude, Rebecca Minkoff is
                          synonymous with It girl style. Minkoff burst on the fashion scene with her
                          best-selling {"'"}Morning After Bag{"'"} and later expanded her offering
                          with the Rebecca Minkoff Collection - a range of luxe city staples with a{' '}
                          {'"'}
                          downtown romantic{'"'} theme.
                        </p>
                      ),
                    },
                    {
                      title: 'Details and Care',
                      content: (
                        <ul>
                          <li>Storm and midnight-blue stretch cotton-blend</li>
                          <li>
                            Notch lapels, functioning buttoned cuffs, two front flap pockets, single
                            vent, internal pocket
                          </li>
                          <li>Two button fastening</li>
                          <li>84% cotton, 14% nylon, 2% elastane</li>
                          <li>Dry clean</li>
                        </ul>
                      ),
                    },
                  ]}
                />
                <GridContainer className={classes.pickSize}>
                  <GridItem md={6} sm={6}>
                    <label>Select color</label>
                    <FormControl fullWidth className={classes.selectFormControl}>
                      <Select
                        MenuProps={{
                          className: classes.selectMenu,
                        }}
                        classes={{
                          select: classes.select,
                        }}
                        value={colorSelect}
                        onChange={() => setColorSelect('0')}
                        inputProps={{
                          name: 'colorSelect',
                          id: 'color-select',
                        }}>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected,
                          }}
                          value="0">
                          Rose
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected,
                          }}
                          value="1">
                          Gray
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected,
                          }}
                          value="2">
                          White
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem md={6} sm={6}>
                    <label>Select size</label>
                    <FormControl fullWidth className={classes.selectFormControl}>
                      <Select
                        MenuProps={{
                          className: classes.selectMenu,
                        }}
                        classes={{
                          select: classes.select,
                        }}
                        value={sizeSelect}
                        onChange={() => setSizeSelect('0')}
                        inputProps={{
                          name: 'sizeSelect',
                          id: 'size-select',
                        }}>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected,
                          }}
                          value="0">
                          Small
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected,
                          }}
                          value="1">
                          Medium
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected,
                          }}
                          value="2">
                          Large
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                </GridContainer>
                <GridContainer className={classes.pullRight}>
                  <Button round color="rose">
                    <>
                      Add to Cart &nbsp; <ShoppingCart />
                    </>
                  </Button>
                </GridContainer>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
