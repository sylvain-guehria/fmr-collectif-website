import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Add from '@material-ui/icons/Add';

import TicketTableLine from './TicketTableLine';
import tableStyles from 'styles/jss/nextjs-material-kit-pro/components/tableStyle.js';
import TicketEntity from '../../../modules/ticket/TicketEntity';
import { Button } from '@material-ui/core';
import { ticketServiceDi } from '../../../di';

interface Props {
  tickets: TicketEntity[];
}

const TicketTable: React.FC<Props> = ({ tickets }) => {
  const tableHead = ['label', 'date', 'lieu', 'prix', 'quantité', 'vendu', '', ''];
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
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {tableHead &&
              tableHead.map((prop, key) => {
                return <TableCell key={key}>{prop}</TableCell>;
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
          <Button className={classes.warning} onClick={() => createTicketAndUpdateState()}>
            Ajouter un ticket
            <Add />
          </Button>
        </TableBody>
      </Table>
    </div>
  );
};

export default TicketTable;
