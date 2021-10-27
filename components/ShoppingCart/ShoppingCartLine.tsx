import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Close from '@material-ui/icons/Close';
import Button from '../lib/CustomButtons/Button';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Link from 'next/link';
// import shoppingCartStyle from 'styles/jss/nextjs-material-kit-pro/pages/shoppingCartStyle.js';
import adminStyle from 'styles/jss/nextjs-material-kit-pro/pages/adminStyle.js';
import Remove from '@material-ui/icons/Remove';
import Add from '@material-ui/icons/Add';
import ItemEntity from '../../modules/item/ItemEntity';
import { useBoutique } from '../../hooks/useBoutique';

const useStyles = makeStyles(adminStyle);

interface Props {
  item: ItemEntity;
}

const ShoppingCartLine: React.FC<Props> = ({ item }) => {
  const { uid, label, size, photoLink, color, price } = item;

  const { deleteItem, updateItemQuantity, boutiques } = useBoutique();
  const classes = useStyles();

  return (
    <>
      <TableRow>
        <TableCell />
        <TableCell>
          <div className={classes.imgContainer}>
            <img src={photoLink || ''} alt="..." className={classes.img} />
          </div>
        </TableCell>
        <TableCell>
          <span>
            <Link href="/shop">{`${label}`}</Link>
          </span>
        </TableCell>
        <TableCell>
          <span>
            <a href="" className={classes.tdNameAnchor}>
              {color}
            </a>
            <br />
          </span>
        </TableCell>
        <TableCell>
          <span>
            <a href="/shop" className={classes.tdNameAnchor}>
              {size}
            </a>
          </span>
        </TableCell>
        <TableCell>
          <span>
            <a href="/shop" className={classes.tdNameAnchor}>
              {price}
            </a>
          </span>
        </TableCell>

        <TableCell>
          <div className={classes.buttonGroup}>
            <Button
              color="info"
              size="sm"
              round
              className={classes.firstButton}
              onClick={() => updateItemQuantity(uid, 'minus')}>
              <Remove />
            </Button>
            <Button
              color="info"
              size="sm"
              round
              className={classes.lastButton}
              onClick={() => updateItemQuantity(uid, 'add')}>
              <Add />
            </Button>
          </div>
          {boutiques.itemsQuantity[uid]}
        </TableCell>

        <TableCell>
          <Tooltip
            id="close1"
            title="Supprimer l'article"
            placement="right"
            classes={{ tooltip: classes.tooltip }}>
            <Button
              link
              className={classes.actionButton}
              onClick={() => {
                if (uid) deleteItem(uid);
              }}>
              <Close />
            </Button>
          </Tooltip>
        </TableCell>
      </TableRow>
    </>
  );
};

export default ShoppingCartLine;
