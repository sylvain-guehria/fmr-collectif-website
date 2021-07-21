import React, { useEffect } from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Header from 'components/Header/Header.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import Parallax from 'components/lib/Parallax/Parallax.js';
import GridContainer from 'components/lib/Grid/GridContainer.js';
import GridItem from 'components/lib/Grid/GridItem.js';
import Card from 'components/lib/Card/Card.js';
import CardBody from 'components/lib/Card/CardBody.js';
import shoppingCartStyle from 'styles/jss/nextjs-material-kit-pro/pages/shoppingCartStyle.js';
import useSWR from 'swr';
import ItemEntity from '../../modules/item/ItemEntity';
import ItemTable from '../../components/Admin/Item/ItemTable';

const useStyles = makeStyles(shoppingCartStyle);

interface Props {
  items: ItemEntity[];
}

const Stocks: React.FC<Props> = ({ items = [] }) => {
  const { data } = useSWR('/item/getAll', { initialData: items });

  useEffect(() => {
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

      <Parallax image="/img/examples/bg2.jpg" filter="dark" small>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              md={8}
              sm={8}
              className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}>
              <h2 className={classes.title}>Gestion des stocks</h2>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Card plain>
            <div>
              {!data ? (
                <div> Loading </div>
              ) : (
                <CardBody plain>
                  <h3 className={classes.cardTitle}>Produits</h3>
                  {data && data.length && <ItemTable items={data} />}
                </CardBody>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Stocks;