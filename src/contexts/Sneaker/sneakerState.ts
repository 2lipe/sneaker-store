import { ISneakers } from '../../models/Interfaces/ISneakers';

export interface SneakerState {
  sneaker: ISneakers[];
}

export const SNEAKER_INITIAL_STATE: SneakerState = {
  sneaker: {} as ISneakers[],
};
