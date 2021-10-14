/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
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

import { useNotification } from '../../hooks/useNotification';
import { useBoutique } from '../../hooks/useBoutique';
import ItemEntity from '../../modules/item/ItemEntity';

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

const SELECT_PRODUCT = 'Faite votre choix';
const ADD_TO_CART = 'Ajouter au panier';
const UNAVAILABLE = 'Indisponible';
const CHOOSE_YOUR_TSHIRT = 'Selection ton tshirt';

type Props = {
  items: ItemEntity[];
};

const ShopItemCard: React.FC<Props> = ({ items }) => {
  const classes = useStyles();
  const [colorSelected, setColorSelected] = useState<string>('');
  const [sizeSelected, setSizeSelected] = useState<string>('');
  const [genderSelected, setGenderSelected] = useState<string>('');

  const [canAddToCart, setCanAddToCart] = useState(false);
  const [messageButton, setMessageButton] = useState(SELECT_PRODUCT);
  const [currentLabel, setCurrentLabel] = useState(CHOOSE_YOUR_TSHIRT);
  const [currentPrice, setCurrentPrice] = useState(0);

  const { addNotification } = useNotification();
  const { addItem } = useBoutique();

  useEffect(() => {
    setCanAddToCart(isItemAvailable());
    setMessageButton(
      colorSelected && sizeSelected && genderSelected
        ? isItemAvailable()
          ? ADD_TO_CART
          : UNAVAILABLE
        : SELECT_PRODUCT
    );
    const matchingItem = getMatchingItem();
    setCurrentLabel(matchingItem ? matchingItem.label : CHOOSE_YOUR_TSHIRT);
    setCurrentPrice(matchingItem ? matchingItem.price : 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorSelected, sizeSelected, genderSelected]);

  const getMatchingItem = (): ItemEntity | undefined => {
    return items.find(
      product =>
        product.color === colorSelected &&
        product.size === sizeSelected &&
        product.gender === genderSelected
    );
  };

  const isItemAvailable = (): boolean => {
    const matchingItem: ItemEntity | undefined = getMatchingItem();
    return matchingItem && matchingItem.quantity ? matchingItem.quantity > 0 : false;
  };

  const addToCart = (): void => {
    const selectedItem: ItemEntity | undefined = getMatchingItem();
    if (addNotification) addNotification('boutique', 'shoppingCart');
    if (selectedItem && addItem) addItem(selectedItem);
  };

  return (
    items && (
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
                  <h2 className={classes.title}>{currentLabel}</h2>
                  <h3 className={classes.mainPrice}>{currentPrice}€</h3>
                  <Accordion
                    active={-1}
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
                            synonymous with It girl style. Minkoff burst on the fashion scene with
                            her best-selling {"'"}Morning After Bag{"'"} and later expanded her
                            offering with the Rebecca Minkoff Collection - a range of luxe city
                            staples with a {'"'}
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
                              Notch lapels, functioning buttoned cuffs, two front flap pockets,
                              single vent, internal pocket
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
                      <label>Sexe</label>
                      <FormControl fullWidth className={classes.selectFormControl}>
                        <Select
                          MenuProps={{
                            className: classes.selectMenu,
                          }}
                          classes={{
                            select: classes.select,
                          }}
                          value={genderSelected}
                          inputProps={{
                            name: 'genderSelected',
                            id: 'gender-select',
                          }}>
                          {items.map((item, index) => (
                            <MenuItem
                              key={item.uid || index}
                              onClick={() => setGenderSelected(item.gender || '')}
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.clselectMenuItemSelected,
                              }}
                              value={item.gender || ''}>
                              {item.gender}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </GridItem>
                    <GridItem md={6} sm={6}>
                      <label>Couleur </label>
                      <FormControl fullWidth className={classes.selectFormControl}>
                        <Select
                          MenuProps={{
                            className: classes.selectMenu,
                          }}
                          classes={{
                            select: classes.select,
                          }}
                          value={colorSelected}
                          inputProps={{
                            name: 'colorSelected',
                            id: 'color-select',
                          }}>
                          {items.map((item, index) => (
                            <MenuItem
                              key={item.uid || index}
                              onClick={() => setColorSelected(item.color || '')}
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected,
                              }}
                              value={item.color || ''}>
                              {item.color}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </GridItem>
                    <GridItem>
                      <label>Taille</label>
                      <FormControl fullWidth className={classes.selectFormControl}>
                        <Select
                          MenuProps={{
                            className: classes.selectMenu,
                          }}
                          classes={{
                            select: classes.select,
                          }}
                          value={sizeSelected}
                          inputProps={{
                            name: 'sizeSelected',
                            id: 'size-select',
                          }}>
                          {items.map((item, index) => (
                            <MenuItem
                              key={item.uid || index}
                              onClick={() => setSizeSelected(item.size || '')}
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected,
                              }}
                              value={item.size || ''}>
                              {item.size}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </GridItem>
                  </GridContainer>
                  <GridContainer className={classes.pullRight}>
                    <Button
                      round
                      onClick={() => addToCart()}
                      color={canAddToCart ? 'behance' : 'youtube'}
                      disabled={!canAddToCart}>
                      <>
                        {messageButton} &nbsp; <ShoppingCart />
                      </>
                    </Button>
                  </GridContainer>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default ShopItemCard;
