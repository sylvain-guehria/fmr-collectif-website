import { useProvideBoutique } from './useBoutique';
import { testHook } from '../jest/testHook';
import ItemEntity from '../modules/item/ItemEntity';
import TicketEntity from '../modules/ticket/TicketEntity';
import { act } from '@testing-library/react';

let hookResponse;
let hookResponse2;
const defaultBoutique = {
    items: [],
    itemsQuantityBought: {},
    tickets: [],
    ticketsQuantityBought: {},
    priceModifications: {}
};

const executeCallbackNumberOfTimes = x => callback => {
    if (x > 0) {
        callback();
        executeCallbackNumberOfTimes(x - 1)(callback);
    }
};

it('Have a default boutiques with no item and ticket', () => {
    testHook(() => {
        hookResponse = useProvideBoutique();
    });
    expect(hookResponse.boutiques).toStrictEqual(defaultBoutique);
});

describe('#Items', () => {
    const item1 = new ItemEntity({ uid: 'uid1', label: 'label1', price: 25 });
    const item2 = new ItemEntity({ uid: 'uid2', label: 'label2', price: 15 });
    testHook(() => {
        hookResponse = useProvideBoutique();
    });
    it('Add an item to the item boutique', async () => {
        let success;
        act(() => {
            success = hookResponse.addItem(item1);
        });
        expect(hookResponse.boutiques.items).toStrictEqual([item1]);
        expect(success).toBe(true);
    });
    it('Do not add an item to the item boutique if it is not an item entity', async () => {
        let success;
        act(() => {
            success = hookResponse2.addItem({ id: 'id' });
        });
        expect(hookResponse.boutiques.items).toStrictEqual([item1]);
        expect(success).toBe(false);
    });
    it('Add the quantity in the itemsQuantityBought object with the item id as attribute', async () => {
        expect(hookResponse.boutiques.itemsQuantityBought).toStrictEqual({ uid1: 1 });
    });
    it('Can add different items', async () => {
        act(() => {
            hookResponse.addItem(item2);
        });
        expect(hookResponse.boutiques.items).toStrictEqual([item1, item2]);
        expect(hookResponse.boutiques.itemsQuantityBought).toStrictEqual({ uid1: 1, uid2: 1 });
    });
    it('Can add the same item, it will only update the quantity', async () => {
        act(() => {
            hookResponse.addItem(item1);
        });
        expect(hookResponse.boutiques.items).toStrictEqual([item1, item2]);
        expect(hookResponse.boutiques.itemsQuantityBought).toStrictEqual({ uid1: 2, uid2: 1 });
    });
    it('Compute the total price', async () => {
        expect(hookResponse.getTotalPrice()).toBe(2 * 25 + 1 * 15);
    });
    it('Can delete an item from the item boutique', () => {
        act(() => {
            hookResponse.deleteItem('uid1');
        });
        setTimeout(() => {
            expect(hookResponse.boutiques.items).toStrictEqual([item2]);
            expect(hookResponse.boutiques.itemsQuantityBought).toStrictEqual({ uid2: 1 });
        }, 1000);
    });
    it('Can reset the boutique', () => {
        act(() => {
            hookResponse.resetBoutiques();
        });
        setTimeout(() => {
            expect(hookResponse.boutiques).toStrictEqual(defaultBoutique);
        }, 1000);
    });
});

describe('#Tickets', () => {
    const ticket1 = new TicketEntity({ uid: 'uid1', label: 'label1', price: 55 });
    const ticket2 = new TicketEntity({ uid: 'uid2', label: 'label2', price: 35 });
    testHook(() => {
        hookResponse2 = useProvideBoutique();
    });
    it('Add a ticket to the ticket boutique', async () => {
        let success;
        act(() => {
            success = hookResponse2.addTicket(ticket1);
        });
        expect(hookResponse2.boutiques.tickets).toStrictEqual([ticket1]);
        expect(success).toBe(true);
    });
    it('Do not add a ticket to the ticket boutique if it is not a ticket entity', async () => {
        let success;
        act(() => {
            success = hookResponse2.addTicket({ id: 'id' });
        });
        expect(hookResponse2.boutiques.tickets).toStrictEqual([ticket1]);
        expect(success).toBe(false);
    });
    it('Add the quantity in the ticketsQuantityBought object with the ticket id as attribute', async () => {
        expect(hookResponse2.boutiques.ticketsQuantityBought).toStrictEqual({ uid1: 1 });
    });
    it('Can add different tickets', async () => {
        act(() => {
            hookResponse2.addTicket(ticket2);
        });
        expect(hookResponse2.boutiques.tickets).toStrictEqual([ticket1, ticket2]);
        expect(hookResponse2.boutiques.ticketsQuantityBought).toStrictEqual({ uid1: 1, uid2: 1 });
    });
    it('Can add the same ticket, it will only update the quantity', async () => {
        act(() => {
            hookResponse2.addTicket(ticket1);
        });
        expect(hookResponse2.boutiques.tickets).toStrictEqual([ticket1, ticket2]);
        expect(hookResponse2.boutiques.ticketsQuantityBought).toStrictEqual({ uid1: 2, uid2: 1 });
    });
    it('Compute the total price', async () => {
        expect(hookResponse2.getTotalPrice()).toBe(2 * 55 + 1 * 35);
    });
    it('Can delete a ticket from the ticket boutique', () => {
        act(() => {
            hookResponse2.deleteTicket('uid1');
        });
        setTimeout(() => {
            expect(hookResponse2.boutiques.tickets).toStrictEqual([ticket2]);
            expect(hookResponse2.boutiques.ticketsQuantityBought).toStrictEqual({ uid2: 1 });
        }, 1000);
    });
    it('Can reset the boutique', () => {
        act(() => {
            hookResponse2.resetBoutiques();
        });
        setTimeout(() => {
            expect(hookResponse2.boutiques).toStrictEqual(defaultBoutique);
        }, 1000);
    });
});

describe('#updateItemQuantity', () => {
    const item1 = new ItemEntity({ uid: 'uid1', label: 'label1', price: 25, quantity: 5 });
    const item2 = new ItemEntity({ uid: 'uid2', label: 'label2', price: 15, quantity: 3 });
    it('Add one to the quantity bought', () => {
        testHook(() => {
            hookResponse = useProvideBoutique();
        });
        act(() => {
            hookResponse.addItem(item1);
            hookResponse.addItem(item2);
            hookResponse.addItem(item2);
        });
        expect(hookResponse.boutiques.items).toStrictEqual([item1, item2]);
        expect(hookResponse.boutiques.itemsQuantityBought).toStrictEqual({ uid1: 1, uid2: 2 });
        act(() => {
            hookResponse.updateItemQuantity('uid1', 'add');
            hookResponse.updateItemQuantity('uid2', 'add');
        });
        expect(hookResponse.boutiques.itemsQuantityBought).toStrictEqual({ uid1: 2, uid2: 3 });
    });
    it('Remove one to the quantity bought', () => {
        act(() => {
            hookResponse.updateItemQuantity('uid2', 'minus');
        });
        expect(hookResponse.boutiques.itemsQuantityBought).toStrictEqual({ uid1: 2, uid2: 2 });
    });
    it('Do not add one to the quantity bought if not enough quantity in stock', () => {
        act(() => {
            hookResponse.updateItemQuantity('uid2', 'add');
            hookResponse.updateItemQuantity('uid2', 'add');
            hookResponse.updateItemQuantity('uid2', 'add');
            hookResponse.updateItemQuantity('uid2', 'add');
        });
        expect(hookResponse.boutiques.itemsQuantityBought).toStrictEqual({ uid1: 2, uid2: 3 });
    });
    it('Do not remove one to the quantity bought if it not greater than 1', () => {
        act(() => {
            hookResponse.updateItemQuantity('uid1', 'minus');
            hookResponse.updateItemQuantity('uid1', 'minus');
            hookResponse.updateItemQuantity('uid1', 'minus');
            hookResponse.updateItemQuantity('uid1', 'minus');
        });
        expect(hookResponse.boutiques.itemsQuantityBought).toStrictEqual({ uid1: 0, uid2: 3 });
    });
});

describe('#updateTicketQuantity', () => {
    const ticket1 = new TicketEntity({ uid: 'uid1', label: 'label1', price: 25, quantity: 5 });
    const ticket2 = new TicketEntity({ uid: 'uid2', label: 'label2', price: 15, quantity: 3 });
    it('Add one to the quantity bought', () => {
        testHook(() => {
            hookResponse = useProvideBoutique();
        });
        act(() => {
            hookResponse.addTicket(ticket1);
            hookResponse.addTicket(ticket2);
            hookResponse.addTicket(ticket2);
        });
        expect(hookResponse.boutiques.tickets).toStrictEqual([ticket1, ticket2]);
        expect(hookResponse.boutiques.ticketsQuantityBought).toStrictEqual({ uid1: 1, uid2: 2 });
        act(() => {
            hookResponse.updateTicketQuantity('uid1', 'add');
            hookResponse.updateTicketQuantity('uid2', 'add');
        });
        expect(hookResponse.boutiques.ticketsQuantityBought).toStrictEqual({ uid1: 2, uid2: 3 });
    });
    it('Remove one to the quantity bought', () => {
        act(() => {
            hookResponse.updateTicketQuantity('uid2', 'minus');
        });
        expect(hookResponse.boutiques.ticketsQuantityBought).toStrictEqual({ uid1: 2, uid2: 2 });
    });
    it('Do not add one to the quantity bought if not enough quantity in stock', () => {
        act(() => {
            hookResponse.updateTicketQuantity('uid2', 'add');
            hookResponse.updateTicketQuantity('uid2', 'add');
            hookResponse.updateTicketQuantity('uid2', 'add');
            hookResponse.updateTicketQuantity('uid2', 'add');
        });
        expect(hookResponse.boutiques.ticketsQuantityBought).toStrictEqual({ uid1: 2, uid2: 3 });
    });
    it('Do not remove one to the quantity bought if it not greater than 1', () => {
        act(() => {
            hookResponse.updateTicketQuantity('uid1', 'minus');
            hookResponse.updateTicketQuantity('uid1', 'minus');
            hookResponse.updateTicketQuantity('uid1', 'minus');
            hookResponse.updateTicketQuantity('uid1', 'minus');
        });
        expect(hookResponse.boutiques.ticketsQuantityBought).toStrictEqual({ uid1: 0, uid2: 3 });
    });
});

describe('#getTotalPrice', () => {
    const ticket1 = new TicketEntity({ uid: 'ticketUid1', label: 'ticket-label1', price: 32, quantity: 99 });
    const ticket2 = new TicketEntity({ uid: 'ticketUid2', label: 'ticket-label2', price: 27, quantity: 99 });
    const item1 = new ItemEntity({ uid: 'itemUid1', label: 'item-label1', price: 12, quantity: 99 });
    const item2 = new ItemEntity({ uid: 'itemUid2', label: 'item-label2', price: 51, quantity: 99 });
    it('Calculate the total price tickets + items', () => {
        testHook(() => {
            hookResponse = useProvideBoutique();
        });
        act(() => {
            hookResponse.addTicket(ticket1);
            hookResponse.addTicket(ticket2);
            hookResponse.addItem(item1);
            hookResponse.addItem(item2);
            executeCallbackNumberOfTimes(11)(() => hookResponse.updateTicketQuantity(ticket1.getId(), 'add'));
            executeCallbackNumberOfTimes(6)(() => hookResponse.updateTicketQuantity(ticket2.getId(), 'add'));
            executeCallbackNumberOfTimes(4)(() => hookResponse.updateItemQuantity(item1.getId(), 'add'));
            executeCallbackNumberOfTimes(15)(() => hookResponse.updateItemQuantity(item2.getId(), 'add'));
        });
        expect(hookResponse.boutiques.tickets).toStrictEqual([ticket1, ticket2]);
        expect(hookResponse.boutiques.items).toStrictEqual([item1, item2]);
        expect(hookResponse.boutiques.ticketsQuantityBought).toStrictEqual({ ticketUid1: 12, ticketUid2: 7 });
        expect(hookResponse.boutiques.itemsQuantityBought).toStrictEqual({ itemUid1: 5, itemUid2: 16 });
        expect(hookResponse.getTotalPrice()).toBe(12 * 32 + 7 * 27 + 5 * 12 + 16 * 51);
    });
    it('Include the shipping price in the calcul', () => {
        testHook(() => {
            hookResponse = useProvideBoutique();
        });
        act(() => {
            hookResponse.addTicket(ticket1);
            hookResponse.addTicket(ticket2);
            hookResponse.addItem(item1);
            hookResponse.addItem(item2);
            executeCallbackNumberOfTimes(11)(() => hookResponse.updateTicketQuantity(ticket1.getId(), 'add'));
            executeCallbackNumberOfTimes(6)(() => hookResponse.updateTicketQuantity(ticket2.getId(), 'add'));
            executeCallbackNumberOfTimes(4)(() => hookResponse.updateItemQuantity(item1.getId(), 'add'));
            executeCallbackNumberOfTimes(15)(() => hookResponse.updateItemQuantity(item2.getId(), 'add'));
            hookResponse.addModificationPrice('shipping', 4.99);
        });
        expect(hookResponse.getTotalPrice()).toBe(12 * 32 + 7 * 27 + 5 * 12 + 16 * 51 + 4.99);
    });
    it('Include a discount in the calcul', () => {
        testHook(() => {
            hookResponse = useProvideBoutique();
        });
        act(() => {
            hookResponse.addTicket(ticket1);
            hookResponse.addTicket(ticket2);
            hookResponse.addItem(item1);
            hookResponse.addItem(item2);
            executeCallbackNumberOfTimes(11)(() => hookResponse.updateTicketQuantity(ticket1.getId(), 'add'));
            executeCallbackNumberOfTimes(6)(() => hookResponse.updateTicketQuantity(ticket2.getId(), 'add'));
            executeCallbackNumberOfTimes(4)(() => hookResponse.updateItemQuantity(item1.getId(), 'add'));
            executeCallbackNumberOfTimes(15)(() => hookResponse.updateItemQuantity(item2.getId(), 'add'));
            hookResponse.addModificationPrice('discount', 22.48);
        });
        expect(hookResponse.getTotalPrice()).toBe(12 * 32 + 7 * 27 + 5 * 12 + 16 * 51 - 22.48);
    });
    it('Include a discount in percentage the calcul', () => {
        testHook(() => {
            hookResponse = useProvideBoutique();
        });
        act(() => {
            hookResponse.addTicket(ticket1);
            hookResponse.addTicket(ticket2);
            hookResponse.addItem(item1);
            hookResponse.addItem(item2);
            executeCallbackNumberOfTimes(11)(() => hookResponse.updateTicketQuantity(ticket1.getId(), 'add'));
            executeCallbackNumberOfTimes(6)(() => hookResponse.updateTicketQuantity(ticket2.getId(), 'add'));
            executeCallbackNumberOfTimes(4)(() => hookResponse.updateItemQuantity(item1.getId(), 'add'));
            executeCallbackNumberOfTimes(15)(() => hookResponse.updateItemQuantity(item2.getId(), 'add'));
            hookResponse.addModificationPrice('discountInPercentage', 22);
        });
        expect(hookResponse.getTotalPrice()).toBe((12 * 32 + 7 * 27 + 5 * 12 + 16 * 51) * 0.78);
    });
    it('Ignore other reduc type', () => {
        testHook(() => {
            hookResponse = useProvideBoutique();
        });
        act(() => {
            hookResponse.addTicket(ticket1);
            hookResponse.addTicket(ticket2);
            hookResponse.addItem(item1);
            hookResponse.addItem(item2);
            executeCallbackNumberOfTimes(11)(() => hookResponse.updateTicketQuantity(ticket1.getId(), 'add'));
            executeCallbackNumberOfTimes(6)(() => hookResponse.updateTicketQuantity(ticket2.getId(), 'add'));
            executeCallbackNumberOfTimes(4)(() => hookResponse.updateItemQuantity(item1.getId(), 'add'));
            executeCallbackNumberOfTimes(15)(() => hookResponse.updateItemQuantity(item2.getId(), 'add'));
            hookResponse.addModificationPrice('otherDiscountType', 500);
        });
        expect(hookResponse.getTotalPrice()).toBe(12 * 32 + 7 * 27 + 5 * 12 + 16 * 51);
    });
});