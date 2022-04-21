import React, { useState, useContext, createContext } from 'react';
import ItemEntity from '../modules/item/ItemEntity';
import TicketEntity from '../modules/ticket/TicketEntity';

type ContextProps = {
  boutiques: Boutiques;
  addItem: (item: ItemEntity) => boolean;
  addTicket: (ticket: TicketEntity) => boolean;
  deleteItem: (itemUid: string) => void;
  deleteTicket: (ticketUid: string) => void;
  updateItemQuantity: (itemUid: string, operation: Operation.ADD | Operation.MINUS) => void;
  updateTicketQuantity: (ticketUid: string, operation: Operation.ADD | Operation.MINUS) => void;
  getTotalPrice: () => number;
  resetBoutiques: () => void;
  addModificationPrice: (modification: PriceModificationKeys, value: number) => void;
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

export const useProvideBoutique = (): Partial<ContextProps> => {
  const [boutiques, setBoutiques] = useState<Boutiques>({
    items: [],
    itemsQuantityBought: {},
    tickets: [],
    ticketsQuantityBought: {},
    priceModifications: {},
  });

  const addItem = (item: ItemEntity): boolean => {
    if (!(item instanceof ItemEntity)) return false;
    const localBoutique = { ...boutiques };
    if (localBoutique.itemsQuantityBought[item.getId()]) {
      localBoutique.itemsQuantityBought[item.getId()] =
        localBoutique.itemsQuantityBought[item.getId()] + 1;
    } else {
      localBoutique.items.push(item);
      localBoutique.itemsQuantityBought[item.getId()] = 1;
    }
    setBoutiques(localBoutique);
    return true;
  };

  const addTicket = (ticket: TicketEntity): boolean => {
    if (!(ticket instanceof TicketEntity)) return false;
    const localBoutique = { ...boutiques };
    if (localBoutique.ticketsQuantityBought[ticket.getId()]) {
      localBoutique.ticketsQuantityBought[ticket.getId()] =
        localBoutique.ticketsQuantityBought[ticket.getId()] + 1;
    } else {
      localBoutique.tickets.push(ticket);
      localBoutique.ticketsQuantityBought[ticket.getId()] = 1;
    }
    setBoutiques(localBoutique);
    return true;
  };

  const deleteItem = (itemUid: string): void => {
    const localBoutique = { ...boutiques };
    localBoutique.items = localBoutique.items.filter(item => item.getId() !== itemUid);
    delete localBoutique.itemsQuantityBought[itemUid];
    setBoutiques(localBoutique);
  };

  const deleteTicket = (ticketUid: string): void => {
    const localBoutique = { ...boutiques };
    localBoutique.tickets = localBoutique.tickets.filter(ticket => ticket.getId() !== ticketUid);
    delete localBoutique.ticketsQuantityBought[ticketUid];
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

  const updateTicketQuantity = (
    ticketUid: string,
    operation: Operation.ADD | Operation.MINUS
  ): void => {
    const localBoutique = { ...boutiques };
    const currentTicket = localBoutique.tickets.find(item => item.getId() === ticketUid);
    let updatedQuantity = 1;
    if (
      operation === Operation.ADD &&
      currentTicket &&
      localBoutique.ticketsQuantityBought[ticketUid] < currentTicket.getQuantity()
    ) {
      updatedQuantity = localBoutique.ticketsQuantityBought[ticketUid] + 1;
      localBoutique.ticketsQuantityBought[ticketUid] = updatedQuantity;
    }
    if (operation === Operation.MINUS && localBoutique.ticketsQuantityBought[ticketUid] > 0) {
      updatedQuantity = localBoutique.ticketsQuantityBought[ticketUid] - 1;
      localBoutique.ticketsQuantityBought[ticketUid] = updatedQuantity;
    }
    setBoutiques(localBoutique);
  };

  const getTotalPrice = (): number => {
    let totalPrice = 0;
    for (const item of boutiques.items) {
      if (isNaN(boutiques.itemsQuantityBought[item.getId()])) continue;
      totalPrice = totalPrice + item.getPrice() * boutiques.itemsQuantityBought[item.getId()];
    }
    for (const ticket of boutiques.tickets) {
      if (isNaN(boutiques.ticketsQuantityBought[ticket.getId()])) continue;
      totalPrice = totalPrice + ticket.getPrice() * boutiques.ticketsQuantityBought[ticket.getId()];
    }
    return totalPrice;
  };

  const addModificationPrice = (modification: PriceModificationKeys, value: number): void => {
    const localBoutique = { ...boutiques };
    localBoutique.priceModifications = {
      ...localBoutique.priceModifications,
      [modification]: value,
    };
    setBoutiques(localBoutique);
  };

  const resetBoutiques = (): void => {
    setBoutiques({
      items: [],
      itemsQuantityBought: {},
      tickets: [],
      ticketsQuantityBought: {},
      priceModifications: {},
    });
  };

  return {
    boutiques,
    addItem,
    addTicket,
    deleteItem,
    deleteTicket,
    updateItemQuantity,
    updateTicketQuantity,
    getTotalPrice,
    resetBoutiques,
    addModificationPrice,
  };
};

export type Boutiques = {
  items: ItemEntity[];
  itemsQuantityBought: Record<string, number>;
  tickets: TicketEntity[];
  ticketsQuantityBought: Record<string, number>;
  priceModifications?: PriceModifications;
};

export type PriceModifications = {
  shipping?: number;
  coupon?: number;
  discount?: number;
};

type PriceModificationKeys = keyof PriceModifications;
