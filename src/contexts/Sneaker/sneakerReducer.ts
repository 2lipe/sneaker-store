/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ISneakers } from '../../models/Interfaces/ISneakers';
import { SneakerAction } from './sneakerActions';
import { SneakerState } from './sneakerState';
import { SneakerActions } from './sneakerTypes';

export type SneakerDispatch = (action: SneakerAction) => void;

export function sneakerReducer(state: SneakerState, action: SneakerAction): SneakerState {
  switch (action.type) {
    case SneakerActions.STORE_SNEAKER: {
      return { ...state, sneaker: action.payload ?? ({} as ISneakers[]) };
    }

    case SneakerActions.STORE_FAIL: {
      return { ...state };
    }

    default: {
      throw new Error(`Action not identified ${action!.type}`);
    }
  }
}
