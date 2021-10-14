import React, { useState, useContext, createContext } from 'react';
import ItemEntity from '../modules/item/ItemEntity';
import { Ticket } from '../modules/ticket/ticketType';

type ContextProps = {
  boutiques: Boutiques;
  addItem: (item: ItemEntity) => void;
  addTicket: (ticket: Ticket) => void;
  deleteItem: (itemUid: string) => void;
  deleteTicket: (ticketUid: string) => void;
};
interface ProviderProps {
  children?: React.ReactNode;
}
const boutiqueContext = createContext({});

export const ProvideBoutique: React.FC<ProviderProps> = ({ children }): React.ReactElement => {
  const boutique = useProvideBoutique();
  return <boutiqueContext.Provider value={boutique}>{children}</boutiqueContext.Provider>;
};

export const useBoutique = (): ContextProps => {
  // eslint-disable-next-line
  // @ts-ignore
  return useContext(boutiqueContext);
};

const useProvideBoutique = (): Partial<ContextProps> => {
  const [boutiques, setBoutiques] = useState<Boutiques>(defaultBoutiques);

  const addItem = (item: ItemEntity): void => {
    const localBoutique = { ...boutiques };
    localBoutique.items.push(item);
    setBoutiques(localBoutique);
  };

  const addTicket = (ticket: Ticket): void => {
    const localBoutique = { ...boutiques };
    localBoutique.tickets.push(ticket);
    setBoutiques(localBoutique);
  };

  const deleteItem = (itemUid: string): void => {
    const localBoutique = { ...boutiques };
    localBoutique.items = localBoutique.items.filter(item => item.getId() !== itemUid);
    setBoutiques(localBoutique);
  };

  const deleteTicket = (ticketUid: string): void => {
    const localBoutique = { ...boutiques };
    localBoutique.tickets = localBoutique.tickets.filter(ticket => ticket.uid !== ticketUid);
    setBoutiques(localBoutique);
  };

  return {
    boutiques,
    addItem,
    addTicket,
    deleteItem,
    deleteTicket,
  };
};

const defaultBoutiques: Boutiques = {
  items: [],
  tickets: [],
};

type Boutiques = {
  items: ItemEntity[];
  tickets: Ticket[];
};
