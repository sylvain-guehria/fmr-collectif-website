import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';

import ShoppingCartLine from './ShoppingCartLine';
import tableStyles from 'styles/jss/nextjs-material-kit-pro/components/tableStyle.js';
import { Ticket } from '../../modules/ticket/ticketType';
import ItemEntity from '../../modules/item/ItemEntity';

const useStyles = makeStyles(tableStyles);

interface Props {
  items?: ItemEntity[];
  tickets?: Ticket[];
}

const ShoppingCartTable: React.FC<Props> = ({ items, tickets }) => {
  const classes = useStyles();

  const tableHead = ['', '', 'Produit', 'Couleur', 'Taille', 'Prix', 'Quantité', ' ', ' '];

  return (
    <div className={classes.tableResponsive}>
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
        <TableBody>
          {tickets &&
            tickets.map(ticket => {
              return ticket.uid && <ShoppingCartLine key={ticket.uid} ticket={ticket} />;
            })}
        </TableBody>
      </Table>
    </div>
  );
};

export default ShoppingCartTable;
