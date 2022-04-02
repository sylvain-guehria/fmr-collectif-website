import React from 'react';
import TicketOfficeComponent from '../components/TicketOffice/TicketsOffice';
import TicketEntity from '../modules/ticket/TicketEntity';
import firebaseTicketRepository from '../modules/ticket/firebaseTicketRepository';
import { buildAdminOnlyLayout } from '../components/Layouts/layoutBuilder';

const ticketRepository = new firebaseTicketRepository();

interface Props {
  tickets: TicketEntity[];
}
interface staticProps {
  props: Props;
}
const TicketOffice: React.FC<Props> = ({ tickets = [] }) => {
  return <TicketOfficeComponent tickets={tickets} />;
};

export const getStaticProps = async (): Promise<staticProps> => {
  const tickets = await ticketRepository.getAll();
  return { props: { tickets: JSON.parse(JSON.stringify(tickets)) } };
};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
TicketOffice.getLayout = buildAdminOnlyLayout();
export default TicketOffice;
