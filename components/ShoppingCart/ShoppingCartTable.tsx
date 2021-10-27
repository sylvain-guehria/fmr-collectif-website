import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Button from './../lib/CustomButtons/Button';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import ShoppingCartLine from './ShoppingCartLine';
import tableStyles from 'styles/jss/nextjs-material-kit-pro/components/tableStyle.js';
import { Ticket } from '../../modules/ticket/ticketType';
import ItemEntity from '../../modules/item/ItemEntity';
import Image from 'next/image';

const useStyles = makeStyles(tableStyles);

interface Props {
  items: ItemEntity[];
  tickets: Ticket[];
}

const ShoppingCartTable: React.FC<Props> = ({ items, tickets }) => {
  const classes = useStyles();
  const cartContainProduct = items?.length || tickets?.length;

  const tableHead = ['', '', 'Produit', 'Couleur', 'Taille', 'Prix', 'Quantité', ' ', ' '];

  return (
    <div className={classes.tableResponsive}>
      {cartContainProduct ? (
        <>
          <Table className={classes.table}>
            {tableHead !== undefined ? (
              <TableHead>
                <TableRow className={classes.tableRow}>
                  {tableHead.map((prop, key) => {
                    return <TableCell key={key}>{prop}</TableCell>;
                  })}
                </TableRow>
              </TableHead>
            ) : null}
            <TableBody>
              {items &&
                items.map(item => {
                  return item.uid && <ShoppingCartLine key={item.uid} item={item} />;
                })}
            </TableBody>
            {/* <TableBody>
              {tickets &&
                tickets.map(ticket => {
                  return ticket.uid && <ShoppingCartLine key={ticket.uid} ticket={ticket} />;
                })}
            </TableBody> */}
          </Table>
          <div style={{ textAlign: 'right', margin: '10px' }}>
            <Button color="info" round>
              <>
                Complete Purchase <KeyboardArrowRight />
              </>
            </Button>
          </div>
        </>
      ) : (
        <div style={{ textAlign: 'center', margin: '50px' }}>
          <Image src={'/img/empty-cart.png'} alt="Empty cart" width="auto" height="auto" />
          <br />
          votre panier est vide.
        </div>
      )}
    </div>
  );
};

export default ShoppingCartTable;
