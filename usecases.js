import di from './di';

import { googleConnexion } from './usecases/googleConnexion';
import { registerWithEmail } from './usecases/registerWithEmail';
import { emailConnexion } from './usecases/emailConnexion';
import { facebookConnexion } from './usecases/facebookConnexion';
import { saveItem } from './usecases/saveItem';


export const googleConnexionUseCase = googleConnexion(di.userRepository);
export const registerWithEmailUseCase = registerWithEmail(di.userRepository);
export const emailConnexionUseCase = emailConnexion();
export const facebookConnexionUseCase = facebookConnexion(di.userRepository);
export const saveItemUseCase = saveItem(di.itemServiceDi, di.storageFunctions);