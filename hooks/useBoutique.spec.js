import { useProvideBoutique } from './useBoutique';
import { testHook } from '../jest/testHook';
import ItemEntity from '../modules/item/ItemEntity';
import { act } from '@testing-library/react';

let hookResponse;

it('Have a default boutiques with no item and ticket', () => {
    const defaultBoutique = {
        items: [],
        itemsQuantityBought: {},
        tickets: [],
        ticketsQuantityBought: {}
    };

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
    describe('#addItem', () => {
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
    });

    it('Add ticket', () => {
    });

    it('Delete item', () => {
    });

    it('Delete ticket', () => {
    });

    it('updateItemQuantity', () => {
    });

    it('getTotalPrice', () => {
    });

    it('resetBoutiques', () => {
    });
});