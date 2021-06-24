import di from './di';

import { googleConnexion } from './usecases/googleConnexion';


export const googleConnexionUseCase = googleConnexion(di.userRepository);