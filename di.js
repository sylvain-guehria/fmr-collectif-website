import firebaseUserRepository from './modules/user/firebaseUserRepository';
import firebaseItemRepository from './modules/item/firebaseItemRepository';
import firebaseTicketRepository from './modules/ticket/firebaseTicketRepository';

import itemService from './modules/item/itemService';
import ticketService from './modules/ticket/ticketService';
import UserService from 'modules/user/userService';

import storageFunctions from './firebase/modules/storage';

const userRepository = new firebaseUserRepository();
const itemRepository = new firebaseItemRepository();
const ticketRepository = new firebaseTicketRepository();

export const itemServiceDi = new itemService(itemRepository, storageFunctions);
export const ticketServiceDi = new ticketService(ticketRepository, storageFunctions);
export const userServiceDi = new UserService(userRepository, storageFunctions);

export default {
    userRepository,
    itemRepository,
    ticketRepository,
    itemServiceDi,
    ticketServiceDi,
    userServiceDi,
    storageFunctions
};
