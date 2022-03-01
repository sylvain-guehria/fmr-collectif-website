import React, { useState, useContext, createContext } from 'react';
import ItemEntity from '../modules/item/ItemEntity';
import { Ticket } from '../modules/ticket/ticketType';

type ContextProps = {
  boutiques: Boutiques;
  addItem: (item: ItemEntity) => void;
  addTicket: (ticket: Ticket) => void;
  deleteItem: (itemUid: string) => void;
  deleteTicket: (ticketUid: string) => void;
  updateItemQuantity: (itemUid: string, operation: Operation.ADD | Operation.MINUS) => void;
  getTotalPrice: () => number;
  resetBoutiques: () => void;
};

export enum Operation {
  ADD = 'add',
  MINUS = 'minus',
}
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
  const [boutiques, setBoutiques] = useState<Boutiques>({
    items: [],
    itemsQuantityBought: {},
    tickets: [],
    ticketsQuantity: {},
  });

  const addItem = (item: ItemEntity): void => {
    const localBoutique = { ...boutiques };
    if (localBoutique.itemsQuantityBought[item.getId()]) {
      localBoutique.itemsQuantityBought[item.getId()] =
        localBoutique.itemsQuantityBought[item.getId()] + 1;
    } else {
      localBoutique.items.push(item);
      localBoutique.itemsQuantityBought[item.getId()] = 1;
    }
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
    delete localBoutique.itemsQuantityBought[itemUid];
    setBoutiques(localBoutique);
  };

  const updateItemQuantity = (
    itemUid: string,
    operation: Operation.ADD | Operation.MINUS
  ): void => {
    const localBoutique = { ...boutiques };
    const currentItem = localBoutique.items.find(item => item.getId() === itemUid);
    let updatedQuantity = 1;
    if (
      operation === Operation.ADD &&
      currentItem &&
      localBoutique.itemsQuantityBought[itemUid] < currentItem.getQuantity()
    ) {
      updatedQuantity = localBoutique.itemsQuantityBought[itemUid] + 1;
      localBoutique.itemsQuantityBought[itemUid] = updatedQuantity;
    }
    if (operation === Operation.MINUS && localBoutique.itemsQuantityBought[itemUid] > 0) {
      updatedQuantity = localBoutique.itemsQuantityBought[itemUid] - 1;
      localBoutique.itemsQuantityBought[itemUid] = updatedQuantity;
    }
    setBoutiques(localBoutique);
  };

  const deleteTicket = (ticketUid: string): void => {
    const localBoutique = { ...boutiques };
    localBoutique.tickets = localBoutique.tickets.filter(ticket => ticket.uid !== ticketUid);
    setBoutiques(localBoutique);
  };

  const getTotalPrice = (): number => {
    let totalPrice = 0;
    for (const item of boutiques.items) {
      totalPrice = totalPrice + item.getPrice() * boutiques.itemsQuantityBought[item.getId()];
    }
    return totalPrice;
  };

  const resetBoutiques = (): void => {
    setBoutiques({
      items: [],
      itemsQuantityBought: {},
      tickets: [],
      ticketsQuantity: {},
    });
  };

  return {
    boutiques,
    addItem,
    addTicket,
    deleteItem,
    deleteTicket,
    updateItemQuantity,
    getTotalPrice,
    resetBoutiques,
  };
};

export type Boutiques = {
  items: ItemEntity[];
  itemsQuantityBought: Record<string, number>;
  tickets: Ticket[];
  ticketsQuantity: Record<string, number>;
};
