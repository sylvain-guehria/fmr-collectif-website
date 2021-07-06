import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';

import UserTableLine from './userTableLine';
import shoppingCartStyle from 'styles/jss/nextjs-material-kit-pro/pages/shoppingCartStyle.js';

const useStyles = makeStyles(shoppingCartStyle);

const userTable = ({ users }) => {
  const classes = useStyles();


  const tableHead = [
    '',
    'Avatar',
    'Nom',
    'Coordonées',
    'Date inscription',
    'Dernière connexion',
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
        {users &&
                users.map(user => {
                  return user.uid && <UserTableLine key={user.uid} user={user} />;
                })}
        </TableBody>
      </Table>
    </div>);
};

export default userTable;