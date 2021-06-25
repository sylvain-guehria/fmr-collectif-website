import di from './di';

import { googleConnexion } from './usecases/googleConnexion';
import { registerWithEmail } from './usecases/registerWithEmail';
import { emailConnexion } from './usecases/emailConnexion';
import { facebookConnexion } from './usecases/facebookConnexion';


export const googleConnexionUseCase = googleConnexion(di.userRepository);
export const registerWithEmailUseCase = registerWithEmail(di.userRepository);
export const emailConnexionUseCase = emailConnexion();
export const facebookConnexionUseCase = facebookConnexion(di.userRepository);