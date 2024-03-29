import React, { useEffect } from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Header from 'components/Header/Header';
import HeaderLinks from 'components/Header/HeaderLinks';
import Parallax from 'components/lib/Parallax/Parallax';
import GridContainer from 'components/lib/Grid/GridContainer';
import GridItem from 'components/lib/Grid/GridItem';
import Card from 'components/lib/Card/Card';
import CardBody from 'components/lib/Card/CardBody';
import shoppingCartStyle from 'styles/jss/nextjs-material-kit-pro/pages/shoppingCartStyle';
import TicketEntity from '../../modules/ticket/TicketEntity';
import TicketTable from './Ticket/TicketTable';
import { Ticket } from 'modules/ticket/ticketType';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(shoppingCartStyle);

interface Props {
  tickets: TicketEntity[];
}

const Stocks: React.FC<Props> = ({ tickets = [] }) => {
  const ticketEntities: TicketEntity[] = Array.from(
    tickets || [],
    (ticket: Ticket) => new TicketEntity(ticket)
  );
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  const classes = useStyles();

  return (
    <div>
      <Header
        brand="Accueil Fmr"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: 'info',
        }}
      />
      <Parallax image="/img/examples/bg2.jpg" filter="dark" small>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              md={8}
              sm={8}
              className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}>
              <h2 className={classes.title}>Gestion des tickets</h2>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.containerAdmin}>
          <Card plain>
            <div>
              {!ticketEntities ? (
                <div> Loading </div>
              ) : (
                <CardBody plain>
                  <h3 className={classes.cardTitle}>Tickets</h3>
                  <TicketTable tickets={ticketEntities} />
                </CardBody>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Stocks;
