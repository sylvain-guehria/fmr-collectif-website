import { StorageInterface } from 'firebase/modules/storage';
import UserEntity from './UserEntity';
import UserRepository from './userRepository';
import { HISTORY_TYPE } from './userType';

class UserService {
  userRepository;
  storageFunctions;

  constructor(userRepository: UserRepository, storageFunctions: StorageInterface) {
    this.userRepository = userRepository;
    this.storageFunctions = storageFunctions;
  }

  async addInUserHistory({
    itemsQuantityBought,
    ticketsQuantityBought,
    user,
  }: {
    itemsQuantityBought: Record<string, number>;
    ticketsQuantityBought: Record<string, number>;
    user: UserEntity;
  }): Promise<void> {
    for (const itemId of Object.keys(itemsQuantityBought)) {
      const quantity = itemsQuantityBought[itemId];

      if (quantity > 0) user.addInUserHistory(HISTORY_TYPE.ITEMS, itemId, quantity);
    }

    for (const ticketId of Object.keys(ticketsQuantityBought)) {
      const quantity = ticketsQuantityBought[ticketId];
      if (quantity > 0) user.addInUserHistory(HISTORY_TYPE.TICKETS, ticketId, quantity);
    }

    return await this.userRepository.update(user);
  }
}

export default UserService;
