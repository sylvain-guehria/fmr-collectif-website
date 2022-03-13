import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from 'components/Header/Header.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import TicketCard from './TicketCard';

import sectionsPageStyle from 'styles/jss/nextjs-material-kit-pro/pages/sectionsPageStyle.js';
import TicketEntity from 'modules/ticket/TicketEntity';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(sectionsPageStyle);

interface Props {
  tickets: TicketEntity[];
}

const Ticketoffice: React.FC<Props> = ({ tickets = [] }) => {
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
      <div className={classes.main}>{tickets && <TicketCard />}</div>
    </div>
  );
};
export default Ticketoffice;
