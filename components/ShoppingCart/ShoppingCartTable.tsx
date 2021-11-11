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
import Image from 'next/image';
import { useBoutique } from '../../hooks/useBoutique';
import Link from 'next/link';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(tableStyles);

const ShoppingCartTable: React.FC = () => {
  const classes = useStyles();
  const {
    boutiques: { items, itemsQuantity },
    deleteItem,
    updateItemQuantity,
    getTotalPrice,
  } = useBoutique();
  const cartContainProduct = items?.length;

  const tableHead = ['', '', 'Produit', 'Couleur', 'Taille', 'Prix', 'Quantité', ' ', ' '];

  return (
    <div className={classes.tableResponsive}>
      {cartContainProduct ? (
        <>
          <Table className={classes.table}>
            {tableHead !== undefined ? (
              <TableHead>
                <TableRow>
                  {tableHead.map((prop, key) => {
                    return <TableCell key={key}>{prop}</TableCell>;
                  })}
                </TableRow>
              </TableHead>
            ) : null}
            <TableBody>
              {items &&
                items.map(item => {
                  return (
                    item.uid && (
                      <ShoppingCartLine
                        key={item.uid}
                        item={item}
                        deleteItem={deleteItem}
                        updateItemQuantity={updateItemQuantity}
                        itemsQuantity={itemsQuantity}
                      />
                    )
                  );
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
            Prix total : {getTotalPrice()} €
            <Link href="/buy">
              <Button color="info" round>
                <>
                  Complete Purchase <KeyboardArrowRight />
                </>
              </Button>
            </Link>
          </div>
        </>
      ) : (
        <div style={{ textAlign: 'center', margin: '25px' }}>
          <Image src={'/img/empty-cart.png'} alt="Empty cart" width="250" height="125" />
          <br />
          votre panier est vide.
        </div>
      )}
    </div>
  );
};

export default ShoppingCartTable;
