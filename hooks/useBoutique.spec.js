import { useProvideBoutique } from './useBoutique';
import { testHook } from '../jest/testHook';
import ItemEntity from '../modules/item/ItemEntity';
import TicketEntity from '../modules/ticket/ticketEntity';
import { act } from '@testing-library/react';

let hookResponse;
let hookResponse2;
const defaultBoutique = {
    items: [],
    itemsQuantityBought: {},
    tickets: [],
    ticketsQuantityBought: {}
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
        act(() => {
            hookResponse.addItem(item1);
        });
        expect(hookResponse.boutiques.items).toStrictEqual([item1]);
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
        expect(hookResponse.getTotalPrice()).toBe(65);
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
        act(() => {
            hookResponse2.addTicket(ticket1);
        });
        expect(hookResponse2.boutiques.tickets).toStrictEqual([ticket1]);
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
        expect(hookResponse2.getTotalPrice()).toBe(145);
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