import React from 'react';
import TicketEntity from '../../modules/ticket/TicketEntity';
import firebaseTicketRepository from '../../modules/ticket/firebaseTicketRepository';
import TicketsComponent from '../../components/Admin/Tickets';
import { buildAdminOnlyLayout } from '../../components/Layouts/layoutBuilder';

const ticketRepository = new firebaseTicketRepository();

interface Props {
  tickets: TicketEntity[];
}
interface staticProps {
  props: Props;
}
const StocksPage: React.FC<Props> = ({ tickets = [] }) => {
  return <TicketsComponent tickets={tickets} />;
};

export const getStaticProps = async (): Promise<staticProps> => {
  const tickets = await ticketRepository.getAll();
  return { props: { tickets: JSON.parse(JSON.stringify(tickets)) } };
};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
StocksPage.getLayout = buildAdminOnlyLayout();
export default StocksPage;
