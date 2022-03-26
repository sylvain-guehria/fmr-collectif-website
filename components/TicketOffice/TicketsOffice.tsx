import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from 'components/Header/Header.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import TicketCard from './TicketCard';
import pricingStyle from 'styles/jss/nextjs-material-kit-pro/pages/sectionsSections/pricingStyle.js';

import TicketEntity from 'modules/ticket/TicketEntity';
import GridContainer from 'components/lib/Grid/GridContainer';
import GridItem from 'components/lib/Grid/GridItem';
import { Ticket } from 'modules/ticket/ticketType';
import { getIdOfTheNextTicketEvent } from './ticketUtil';
import Favorite from '@mui/icons-material/Favorite';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Check from '@mui/icons-material/Check';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useBoutique } from '../../hooks/useBoutique';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(pricingStyle);

interface Props {
  tickets: Ticket[];
}

const Ticketoffice: React.FC<Props> = ({ tickets = [] }) => {
  const [showFullListOfTicket, setShowFullListOfTicket] = useState(true);
  const {
    boutiques: { ticketsQuantityBought },
    addTicket,
    deleteTicket,
  } = useBoutique();

  const ticketEntities: TicketEntity[] = Array.from(
    tickets || [],
    (ticket: Ticket) => new TicketEntity(ticket)
  );
  const classes = useStyles();

  ticketEntities.sort((a, b) => {
    return a.date - b.date;
  });

  const allTicketEntitiesMostRecentFirst = [...ticketEntities].reverse();
  const futureTicketEntitiesMostRecentFirst = allTicketEntitiesMostRecentFirst.filter(
    ticket => !ticket.isPast()
  );

  const [listOfTicketsToDisplay, setListOfTicketsToDisplay] = useState(
    allTicketEntitiesMostRecentFirst
  );

  const idOfNextTicketEvent = getIdOfTheNextTicketEvent(ticketEntities);

  const handleHideTicketsCheckBox = (): void => {
    setListOfTicketsToDisplay(
      showFullListOfTicket ? futureTicketEntitiesMostRecentFirst : allTicketEntitiesMostRecentFirst
    );
    setShowFullListOfTicket(!showFullListOfTicket);
  };

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
                <h2 className={classes.title}>
                  Achète ton ticket d&apos;entré et viens t&apos;éclater avec FMR
                  <Favorite />
                </h2>
                <div className={classes.sectionSpace} />
              </GridItem>
            </GridContainer>
            <FormControlLabel
              control={
                <Checkbox
                  disableRipple
                  tabIndex={-1}
                  onClick={() => handleHideTicketsCheckBox()}
                  checkedIcon={<Check />}
                  icon={<VisibilityOffIcon />}
                />
              }
              label="Cacher les évènement passés"
            />
            <GridContainer>
              {listOfTicketsToDisplay &&
                !!listOfTicketsToDisplay.length &&
                listOfTicketsToDisplay.map(ticket => (
                  <TicketCard
                    key={ticket.getId()}
                    ticket={ticket}
                    isNextEvent={ticket.getId() === idOfNextTicketEvent}
                    addTicketToCart={addTicket}
                    deleteTicketFromCart={deleteTicket}
                    isInCart={!!ticketsQuantityBought[ticket.getId()]}
                  />
                ))}
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticketoffice;
