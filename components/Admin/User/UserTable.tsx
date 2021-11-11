import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';

import UserTableLine from './UserTableLine';
import tableStyles from 'styles/jss/nextjs-material-kit-pro/components/tableStyle.js';
import UserEntity from '../../../modules/user/UserEntity';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(tableStyles);

interface Props {
  users: UserEntity[];
}

const UserTable: React.FC<Props> = ({ users }) => {
  const classes = useStyles();

  const tableHead = [
    '',
    'Avatar',
    'Nom',
    'Coordonées',
    'Date inscription',
    'Dernière connexion',
    '',
    '',
  ];

  return (
    <div className={classes.tableResponsive}>
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
          {users &&
            users.map(user => {
              return user.uid && <UserTableLine key={user.uid} user={user} />;
            })}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserTable;
