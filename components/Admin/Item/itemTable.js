import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';

import ItemTableLine from './itemTableLine';
import shoppingCartStyle from 'styles/jss/nextjs-material-kit-pro/pages/shoppingCartStyle.js';

const useStyles = makeStyles(shoppingCartStyle);

const itemTable = ({ items }) => {
  const classes = useStyles();


  const tableHead = [
    '',
    'Photo',
    'label',
    'taille',
    'couleur',
    'quantité',
    'prix',
    'vendu',
    'dernier achat le',
    '',
    ''
  ];

  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead >
            <TableRow className={classes.tableRow}>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell key={key}>
                    {prop}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
        {items &&
                items.map(item => {
                  return item.uid && <ItemTableLine key={item.uid} item={item} />;
                })}
        </TableBody>
      </Table>
    </div>);
};

export default itemTable;