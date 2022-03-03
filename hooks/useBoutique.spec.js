import { useProvideBoutique } from './useBoutique';
import { testHook } from '../jest/testHook';

let hookResponse;

it('Have a default boutiques with no item and ticket', () => {
    const defaultBoutique = {
        items: [],
        itemsQuantityBought: {},
        tickets: [],
        ticketsQuantity: {}
    };

    testHook(() => {
        hookResponse = useProvideBoutique();
    });
    expect(hookResponse.boutiques).toStrictEqual(defaultBoutique);
});

it('Add item', () => {
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