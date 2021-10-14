import React, { useState } from 'react';
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
import { Ticket } from '../../modules/ticket/ticketType';

const useStyles = makeStyles(adminStyle);

interface Props {
  item?: ItemEntity;
  ticket?: Ticket;
}

const ShoppingCartLine: React.FC<Props> = ({ item = {}, ticket = {} }) => {
  const { label, size, photoLink, color, price } = item;
  ticket;

  const [quantityToBuy, setQuantityToBuy] = useState(1);

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
              onClick={() => setQuantityToBuy(quantityToBuy > 0 ? quantityToBuy - 1 : 0)}>
              <Remove />
            </Button>
            <Button
              color="info"
              size="sm"
              round
              className={classes.lastButton}
              onClick={() => setQuantityToBuy(quantityToBuy + 1)}>
              <Add />
            </Button>
          </div>
          {quantityToBuy}
        </TableCell>

        <TableCell>
          <Tooltip
            id="close1"
            title="Supprimer l'article"
            placement="right"
            classes={{ tooltip: classes.tooltip }}>
            <Button link className={classes.actionButton}>
              <Close />
            </Button>
          </Tooltip>
        </TableCell>
      </TableRow>
    </>
  );
};

export default ShoppingCartLine;
