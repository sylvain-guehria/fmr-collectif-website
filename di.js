import firebaseUserRepository from './modules/user/firebaseUserRepository';
import firebaseItemRepository from './modules/item/firebaseItemRepository';
import itemService from './modules/item/itemService';

const userRepository = new firebaseUserRepository();
const itemRepository = new firebaseItemRepository();

export const itemServiceDi = new itemService(itemRepository);

export default {
    userRepository,
    itemRepository,
    itemServiceDi
};
