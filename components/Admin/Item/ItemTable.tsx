import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Add from '@material-ui/icons/Add';

import ItemTableLine from './ItemTableLine';
import tableStyles from 'styles/jss/nextjs-material-kit-pro/components/tableStyle.js';
import ItemEntity from '../../../modules/item/ItemEntity';
import { Button } from '@material-ui/core';
import { itemServiceDi } from '../../../di';

interface Props {
  items: ItemEntity[];
}

const ItemTable: React.FC<Props> = ({ items }) => {
  const tableHead = ['Photo', 'label', 'sex', 'taille', 'couleur', 'prix', 'quantité', 'vendu', ''];
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const useStyles = makeStyles(tableStyles);
  const classes = useStyles();

  const emptyItem: ItemEntity = new ItemEntity({
    uid: '',
    label: '',
    gender: '',
    size: '',
    photoLink: '',
    color: '',
    quantity: 0,
    price: 0,
    numberTotalSell: 0,
    lastBuyDate: 0,
    isDeleted: false,
  });

  const [itemList, setItemList] = useState(items || []);

  const createItemAndUpdateState = async (): Promise<void> => {
    const item = await itemServiceDi.createItem(emptyItem);
    const updatedItemList = itemList.concat(item);
    setItemList(updatedItemList);
  };

  const deleteItemAndUpdateState = async (uid: string): Promise<void> => {
    await itemServiceDi.deleteItem(uid);
    const updatedItemList = itemList.filter(item => item.uid !== uid);
    setItemList(updatedItemList);
  };

  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {tableHead &&
              tableHead.map((prop, key) => {
                return (
                  <TableCell key={key}>
                    {/* width={100 / 7} */}
                    {prop}
                  </TableCell>
                );
              })}
          </TableRow>
        </TableHead>
        <TableBody>
          {itemList &&
            itemList.map((item: ItemEntity) => {
              return (
                item.uid && (
                  <ItemTableLine key={item.uid} item={item} deleteItem={deleteItemAndUpdateState} />
                )
              );
            })}
          <Button className={classes.warning} onClick={() => createItemAndUpdateState()}>
            Ajouter un produit
            <Add />
          </Button>
        </TableBody>
      </Table>
    </div>
  );
};

export default ItemTable;
