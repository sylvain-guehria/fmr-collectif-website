import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// core components
import GridItem from 'components/lib/Grid/GridItem.js';
import Card from 'components/lib/Card/Card.js';
import CardBody from 'components/lib/Card/CardBody.js';
import CardFooter from 'components/lib/Card/CardFooter.js';
import Button from 'components/lib/CustomButtons/Button';

import pricingStyle from 'styles/jss/nextjs-material-kit-pro/pages/sectionsSections/pricingStyle.js';
import TicketEntity from 'modules/ticket/TicketEntity';
import { formatTicketDate, formatTicketHour } from './ticketUtil';
import { Tooltip } from '@material-ui/core';
import Delete from '@mui/icons-material/Delete';
import { toast } from 'react-toastify';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(pricingStyle);

interface Props {
  ticket: TicketEntity;
  isNextEvent: boolean;
  addTicketToCart: (ticket: TicketEntity) => boolean;
  deleteTicketFromCart: (ticketId: string) => void;
  isInCart: boolean;
}

const TicketCard: React.FC<Props> = ({
  ticket,
  isNextEvent,
  addTicketToCart,
  deleteTicketFromCart,
  isInCart,
}) => {
  const classes = useStyles();
  const canAddToCart = ticket.isTicketForSales() && ticket.getDate() > Date.now();

  const addTicketToCartAndToast = (): void => {
    const success = addTicketToCart(ticket);
    if (success) toast.success('Ticket ajouté au panier');
  };

  const backgroundImageUrl = isNextEvent
    ? "url('https://images.unsplash.com/photo-1536940385103-c729049165e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=732&q=80"
    : "url('https://images.unsplash.com/photo-1571811404701-50d168d30555?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
  return (
    <GridItem xs={12} sm={4} md={4}>
      <Card
        pricing
        raised
        background
        style={{
          backgroundImage: backgroundImageUrl,
        }}>
        <CardBody pricing background>
          {isNextEvent && 'Notre prochaine évènement :'}
          <h6 className={classes.cardCategoryWhite}>{formatTicketDate(ticket.getDate())}</h6>
          <h1 className={classes.cardTitleWhite}>
            <small>€</small> {ticket.getPrice()}
          </h1>
          <ul>
            <li>{ticket.getLabel()}</li>
            <li>
              <b>Lieu :</b> {ticket.getPlace()}
            </li>
            <li>
              <b>RDV dès</b> {formatTicketHour(ticket.getDate())}
            </li>
            <li>{ticket.getDescription()}</li>
          </ul>
        </CardBody>
        <CardFooter pricing className={classes.justifyContentCenter}>
          <Button color="white" round disabled={!canAddToCart} onClick={addTicketToCartAndToast}>
            Ajouter au panier
          </Button>
          {isInCart && (
            <Tooltip id="delete" title={'Supprimer du panier'} placement="left">
              <Button link onClick={() => deleteTicketFromCart(ticket.getId())}>
                <Delete color={'error'} />
              </Button>
            </Tooltip>
          )}
        </CardFooter>
      </Card>
    </GridItem>
  );
};

export default TicketCard;
