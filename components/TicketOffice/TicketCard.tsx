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
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(pricingStyle);

interface Props {
  ticket: TicketEntity;
  isNextEvent: boolean;
}

const TicketCard: React.FC<Props> = ({ ticket, isNextEvent }) => {
  const classes = useStyles();
  const canAddToCart = ticket.isTicketForSales() && ticket.getDate() > Date.now();
  const backgroundImageUrl = isNextEvent
    ? "url('https://images.unsplash.com/photo-1536940385103-c729049165e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=732&q=80"
    : '';
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
          <h6 className={classes.cardCategoryWhite}>
            {new Date(ticket.getDate()).toLocaleDateString().split('T')[0]}
          </h6>
          <h1 className={classes.cardTitleWhite}>
            <small>€</small> {ticket.getPrice()}
          </h1>
          <ul>
            <li>{ticket.getLabel()}</li>
            <li>
              <b>Lieu :</b> {ticket.getPlace()}
            </li>
            <li>
              <b>RDV dès</b> {new Date(ticket.getDate()).toISOString().split('T')[1]}
            </li>
            <li>{ticket.getDescription()}</li>
          </ul>
        </CardBody>
        <CardFooter pricing className={classes.justifyContentCenter}>
          <Button color="white" round disabled={!canAddToCart}>
            Ajouter au panier
          </Button>
        </CardFooter>
      </Card>
    </GridItem>
  );
};

export default TicketCard;
