import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Button from './../lib/CustomButtons/Button';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import ShoppingItemCartLine from './ShoppingItemCartLine';
import ShoppingTicketCartLine from './ShoppingTicketCartLine';
import tableStyles from 'styles/jss/nextjs-material-kit-pro/components/tableStyle.js';
import Image from 'next/image';
import { useBoutique } from '../../hooks/useBoutique';
import Link from 'next/link';
import MultiTab from 'components/lib/Tabs/Tabs';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(tableStyles);

type Props = {
  readOnly?: boolean;
};

const ShoppingCartTable: React.FC<Props> = ({ readOnly }) => {
  const classes = useStyles();
  const {
    boutiques: { items, itemsQuantityBought, tickets, ticketsQuantityBought },
    deleteItem,
    deleteTicket,
    updateItemQuantity,
    updateTicketQuantity,
    getTotalPrice,
  } = useBoutique();

  const cartContainsItem = !!items.length;
  const cartContainsTicket = !!tickets.length;
  const cartContainsProduct = cartContainsItem || cartContainsTicket;

  const tableItemHead = ['', '', 'Produit', 'Couleur', 'Taille', 'Prix', 'Quantité', ' ', ' '];
  const tableTicketHead = ['Ticket', 'Date', 'Lieu', 'Prix', 'Quantité', ' ', ' '];
  const tabs = [];

  if (cartContainsItem) {
    tabs.push({
      tabLabel: 'Produits',
      tabContent: (
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              {tableItemHead.map((prop, key) => {
                return <TableCell key={key}>{prop}</TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {items &&
              !!items.length &&
              items.map(item => {
                return (
                  item.uid && (
                    <ShoppingItemCartLine
                      key={item.uid}
                      item={item}
                      deleteItem={deleteItem}
                      updateItemQuantity={updateItemQuantity}
                      itemsQuantityBought={itemsQuantityBought}
                    />
                  )
                );
              })}
          </TableBody>
        </Table>
      ),
    });
  }

  if (cartContainsTicket) {
    tabs.push({
      tabLabel: 'Tickets',
      tabContent: (
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              {tableTicketHead.map((prop, key) => {
                return <TableCell key={key}>{prop}</TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {tickets &&
              !!tickets.length &&
              tickets.map(ticket => {
                return (
                  ticket.uid && (
                    <ShoppingTicketCartLine
                      key={ticket.uid}
                      ticket={ticket}
                      deleteTicket={deleteTicket}
                      updateTicketQuantity={updateTicketQuantity}
                      ticketsQuantityBought={ticketsQuantityBought}
                    />
                  )
                );
              })}
          </TableBody>
        </Table>
      ),
    });
  }

  return (
    <div className={`${classes.tableResponsive} ${classes.padding}`}>
      {cartContainsProduct ? (
        <>
          <MultiTab tabs={tabs} />
          <div style={{ textAlign: 'right', margin: '10px' }}>
            Prix total : {getTotalPrice()} €
            {!readOnly && (
              <Link href="/buy">
                <Button color="info" round>
                  <>
                    Terminé vos achats <KeyboardArrowRight />
                  </>
                </Button>
              </Link>
            )}
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
