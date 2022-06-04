import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Close from '@mui/icons-material/Close';
import Button from '../lib/CustomButtons/Button';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Link from 'next/link';
// import shoppingCartStyle from 'styles/jss/nextjs-material-kit-pro/pages/shoppingCartStyle';
import adminStyle from 'styles/jss/nextjs-material-kit-pro/pages/adminStyle';
import Remove from '@mui/icons-material/Remove';
import Add from '@mui/icons-material/Add';
import TicketEntity from '../../modules/ticket/TicketEntity';
import { Operation } from 'hooks/useBoutique';
import { formatTicketDate } from 'components/TicketOffice/ticketUtil';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(adminStyle);

interface Props {
  ticket: TicketEntity;
  deleteTicket: (ticketUid: string) => void;
  updateTicketQuantity: (ticketUid: string, operation: Operation.ADD | Operation.MINUS) => void;
  ticketsQuantityBought: Record<string, number>;
}

const ShoppingTicketCartLine: React.FC<Props> = ({
  ticket,
  deleteTicket,
  updateTicketQuantity,
  ticketsQuantityBought,
}) => {
  const classes = useStyles();

  return (
    <>
      <TableRow>
        <TableCell />
        <TableCell />
        <TableCell>
          <span>
            <Link href="/ticket-office">{`${ticket.getLabel()}`}</Link>
          </span>
        </TableCell>
        <TableCell>
          <span>
            {formatTicketDate(ticket.getDate())}
            <br />
          </span>
        </TableCell>
        <TableCell>
          <span>{ticket.getPlace()}</span>
        </TableCell>
        <TableCell>
          <span>{ticket.getPrice()} €</span>
        </TableCell>

        <TableCell>
          <div className={classes.buttonGroup}>
            <Button
              color="info"
              size="sm"
              round
              className={classes.firstButton}
              onClick={() => updateTicketQuantity(ticket.getId(), Operation.MINUS)}>
              <Remove />
            </Button>
            <Button
              color="info"
              size="sm"
              round
              className={classes.lastButton}
              onClick={() => updateTicketQuantity(ticket.getId(), Operation.ADD)}>
              <Add />
            </Button>
          </div>
          {ticketsQuantityBought[ticket.getId()]}
        </TableCell>

        <TableCell>
          <Tooltip
            id="close1"
            title="Supprimer l'article"
            placement="right"
            classes={{ tooltip: classes.tooltip }}>
            <Button
              link
              className={classes.actionButton}
              onClick={() => {
                if (ticket.getId()) deleteTicket(ticket.getId());
              }}>
              <Close />
            </Button>
          </Tooltip>
        </TableCell>
      </TableRow>
    </>
  );
};

export default ShoppingTicketCartLine;
