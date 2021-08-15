import firebaseUserRepository from './modules/user/firebaseUserRepository';
import firebaseItemRepository from './modules/item/firebaseItemRepository';
import itemService from './modules/item/itemService';
import storageFunctions from './firebase/modules/storage';

const userRepository = new firebaseUserRepository();
const itemRepository = new firebaseItemRepository();

export const itemServiceDi = new itemService(itemRepository, storageFunctions);

export default {
    userRepository,
    itemRepository,
    itemServiceDi,
    storageFunctions
};
