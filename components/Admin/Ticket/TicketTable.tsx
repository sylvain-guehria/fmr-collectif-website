import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Add from '@mui/icons-material/Add';

import TicketTableLine from './TicketTableLine';
import tableStyles from 'styles/jss/nextjs-material-kit-pro/components/tableStyle';
import TicketEntity from '../../../modules/ticket/TicketEntity';
import { Button } from '@material-ui/core';
import { ticketServiceDi } from '../../../di';

interface Props {
  tickets: TicketEntity[];
}

const TicketTable: React.FC<Props> = ({ tickets }) => {
  const tableHead = [
    'label',
    'date',
    'lieu',
    'prix',
    'quantité',
    'vendu',
    'à vendre',
    'description',
  ];
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const useStyles = makeStyles(tableStyles);
  const classes = useStyles();

  const emptyTicket: TicketEntity = new TicketEntity({
    uid: '',
    label: '',
    date: 0,
    place: '',
    quantity: 0,
    price: 0,
    numberTotalSell: 0,
    lastBuyDate: 0,
    isDeleted: false,
    isActive: false,
    description: '',
  });

  const [ticketList, setTicketList] = useState(tickets || []);

  const createTicketAndUpdateState = async (): Promise<void> => {
    const ticket = await ticketServiceDi.createTicket(emptyTicket);
    const updatedTicketList = ticketList.concat(ticket);
    setTicketList(updatedTicketList);
  };

  const deleteTicketAndUpdateState = async (uid: string): Promise<void> => {
    await ticketServiceDi.deleteTicket(uid);
    const updatedTicketList = ticketList.filter(ticket => ticket.uid !== uid);
    setTicketList(updatedTicketList);
  };

  return (
    <div className={classes.tableResponsive}>
      <Button
        className={classes.warning}
        onClick={() => createTicketAndUpdateState()}
        style={{ position: 'absolute', right: '10px', top: '10px' }}>
        Ajouter un ticket
        <Add />
      </Button>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {tableHead &&
              tableHead.map((prop, key) => {
                return (
                  <TableCell key={key} align="center">
                    {prop}
                  </TableCell>
                );
              })}
          </TableRow>
        </TableHead>
        <TableBody>
          {ticketList &&
            ticketList.map((ticket: TicketEntity) => {
              return (
                ticket.uid && (
                  <TicketTableLine
                    key={ticket.uid}
                    ticket={ticket}
                    deleteTicket={deleteTicketAndUpdateState}
                  />
                )
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
};

export default TicketTable;
