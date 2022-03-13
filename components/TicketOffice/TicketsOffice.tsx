import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from 'components/Header/Header.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import TicketCard from './TicketCard';
import pricingStyle from 'styles/jss/nextjs-material-kit-pro/pages/sectionsSections/pricingStyle.js';

import TicketEntity from 'modules/ticket/TicketEntity';
import GridContainer from 'components/lib/Grid/GridContainer';
import GridItem from 'components/lib/Grid/GridItem';
import { Ticket } from 'modules/ticket/ticketType';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(pricingStyle);

interface Props {
  tickets: Ticket[];
}

const Ticketoffice: React.FC<Props> = ({ tickets = [] }) => {
  const ticketEntities: TicketEntity[] = Array.from(
    tickets || [],
    (ticket: Ticket) => new TicketEntity(ticket)
  );
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        color="white"
        brand="Accueil Fmr"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        changeColorOnScroll={{
          height: 300,
          color: 'info',
        }}
      />
      <div className="cd-section">
        <div className={classes.pricing}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem
                xs={12}
                sm={6}
                md={6}
                className={classes.mlAuto + ' ' + classes.mrAuto + ' ' + classes.textCenter}>
                <h2 className={classes.title}>Achète ton ticket d&apos;entré</h2>
                <div className={classes.sectionSpace} />
              </GridItem>
            </GridContainer>
            <GridContainer>
              {ticketEntities &&
                ticketEntities.length &&
                ticketEntities.map(ticket => <TicketCard key={ticket.getId()} ticket={ticket} />)}
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticketoffice;
