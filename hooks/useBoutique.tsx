import React, { useState, useContext, createContext } from 'react';
import { Item } from '../modules/item/itemType';
import { Ticket } from '../modules/ticket/ticketType';

type ContextProps = {
  boutiques: Boutiques;
  addItem: (item: Item) => void;
  addTicket: (ticket: Ticket) => void;
  deleteItem: (itemUid: string) => void;
  deleteTicket: (ticketUid: string) => void;
};
interface ProviderProps {
  children?: React.ReactNode;
}
const boutiqueContext = createContext<Partial<ContextProps>>({});

export const ProvideBoutique: React.FC<ProviderProps> = ({ children }): React.ReactElement => {
  const boutique = useProvideBoutique();
  return <boutiqueContext.Provider value={boutique}>{children}</boutiqueContext.Provider>;
};

export const useBoutique = (): Partial<ContextProps> => {
  return useContext(boutiqueContext);
};

const useProvideBoutique = (): Partial<ContextProps> => {
  const [boutiques, setBoutiques] = useState(defaultBoutiques);

  const addItem = (item: Item): void => {
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
    localBoutique.items = localBoutique.items.filter(item => item.uid !== itemUid);
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
  items: Item[];
  tickets: Ticket[];
};
