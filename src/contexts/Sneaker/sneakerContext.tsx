/* eslint-disable prefer-const */
import React, { createContext, useReducer } from 'react';
import { getSneakerLocalStorage } from '../../utils/helpers/local-storage-helper';
import { SneakerDispatch, sneakerReducer } from './sneakerReducer';
import { SneakerState, SNEAKER_INITIAL_STATE } from './sneakerState';
import { SneakerActions } from './sneakerTypes';

const SneakerStateContext = createContext<SneakerState | undefined>(undefined);
const SneakerDispatchContext = createContext<SneakerDispatch | undefined>(undefined);

type SneakerProps = { children: React.ReactNode };

function SneakerProvider({ children }: SneakerProps) {
  const response = getSneakerLocalStorage();

  let initialState = SNEAKER_INITIAL_STATE;

  if (response) {
    initialState = { sneaker: response };
  }

  const [state, dispatch] = useReducer(sneakerReducer, initialState);

  return (
    <SneakerStateContext.Provider value={state}>
      <SneakerDispatchContext.Provider value={dispatch}>{children}</SneakerDispatchContext.Provider>
    </SneakerStateContext.Provider>
  );
}

function useSneakerContext() {
  const state = React.useContext(SneakerStateContext);

  if (!state) {
    throw new Error('useSneakerContext must be used inside a SneakerProvider');
  }

  const dispatch = React.useContext(SneakerDispatchContext);

  if (!dispatch) {
    throw new Error('useSneakerContext must be used inside a SneakerProvider');
  }

  const actions = SneakerActions;

  return { state, dispatch, actions };
}

export { SneakerProvider, useSneakerContext };
