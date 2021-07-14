import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';

import ItemTableLine from './ItemTableLine';
import tableStyles from 'styles/jss/nextjs-material-kit-pro/components/tableStyle.js';
import ItemEntity from '../../../modules/item/ItemEntity';

interface Props {
  items: ItemEntity[];
}

const ItemTable: React.FC<Props> = ({ items }) => {
  const tableHead = ['Photo', 'label', 'taille', 'couleur', 'prix', 'quantité', 'vendu'];
  const useStyles = makeStyles(tableStyles);
  const classes = useStyles();

  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes.tableHeadCell}>
            <TableRow>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell align="left" key={key}>
                    {prop}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {items &&
            items.map((item: ItemEntity) => {
              return item.uid && <ItemTableLine key={item.uid} item={item} />;
            })}
        </TableBody>
      </Table>
    </div>
  );
};

export default ItemTable;
