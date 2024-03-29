import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Close from '@mui/icons-material/Close';
import Button from '../lib/CustomButtons/Button';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Link from 'next/link';
import shoppingCartStyle from 'styles/jss/nextjs-material-kit-pro/pages/shoppingCartStyle';
import adminStyle from 'styles/jss/nextjs-material-kit-pro/pages/adminStyle';
import Remove from '@mui/icons-material/Remove';
import Add from '@mui/icons-material/Add';
import ItemEntity from '../../modules/item/ItemEntity';
import { Operation } from 'hooks/useBoutique';
import Image from 'next/image';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(adminStyle);
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles2 = makeStyles(shoppingCartStyle);

interface Props {
  item: ItemEntity;
  deleteItem: (itemUid: string) => void;
  updateItemQuantity: (itemUid: string, operation: Operation.ADD | Operation.MINUS) => void;
  itemsQuantityBought: Record<string, number>;
}

const ShoppingItemCartLine: React.FC<Props> = ({
  item,
  deleteItem,
  updateItemQuantity,
  itemsQuantityBought,
}) => {
  const { uid, label, size, photoLink, color, price } = item;

  const classes = useStyles();
  const classes2 = useStyles2();

  return (
    <>
      <TableRow>
        <TableCell />
        <TableCell>
          <div className={classes2.imgContainer}>
            <Image src={photoLink || ''} alt="..." width="100%" height="100%" />
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
              {price} €
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
              onClick={() => updateItemQuantity(uid, Operation.MINUS)}>
              <Remove />
            </Button>
            <Button
              color="info"
              size="sm"
              round
              className={classes.lastButton}
              onClick={() => updateItemQuantity(uid, Operation.ADD)}>
              <Add />
            </Button>
          </div>
          {itemsQuantityBought[uid]}
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

export default ShoppingItemCartLine;
